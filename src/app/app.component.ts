import { Component } from '@angular/core';
import { NuColumn, NuData } from 'ng-uranus-perd/table';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  result: string;
  // table
  columns: NuColumn[] = [
    {
      name: 'c1',
      key: 'id',
      sortable: true,
      style: { color: 'red' },
      width: '50px'
    },
    {
      name: 'c2',
      key: 'name',
      hidden: () => {
        return false;
      }
    },
  ];

  data: NuData[] = [
    {
      id: 1,
      name: 'Xiao Ming'
    },
    {
      id: 2,
      name: 'Xiao Wang'
    }
  ];

  // form
  model = {};
  options: FormlyFormOptions = {};
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [{
    key: 'input',
    type: 'input',
    defaultValue: 'aaa',
    templateOptions: {
      label: 'Input',
      placeholder: 'please input.',
      required: true,
    },
    validators: {
      required: {
        expression: (c) => {
          if (c.value === null) {
            return true;
          }
          if (c.value.trim() === '') {
            return false;
          }
          return true;
        },
        message: () => 'required',
      },
    },
  },
  {
    key: 'checkbox',
    type: 'checkbox',
    templateOptions: {
      label: 'Checkbox',
    }
  },
  {
    key: 'select',
    type: 'select',
    defaultValue: 'aa',
    templateOptions: {
      label: 'Select',
      options: [
        {
          label: 'aa',
          value: 'aa',
        },
        {
          label: 'bb',
          value: 'bb',
          disabled: true,
        }
      ],
    }
  },
  {
    key: 'radio',
    type: 'radio',
    defaultValue: 'aa',
    templateOptions: {
      label: 'Radio',
      options: [
        {
          label: 'aa',
          value: 'aa',
        },
        {
          label: 'bb',
          value: 'bb',
        }
      ],
    },
  },
  {
    key: 'switch',
    type: 'switch',
    templateOptions: {
      label: 'Switch',
    }
  },
  {
    key: 'slider',
    type: 'slider',
    templateOptions: {
      label: 'Slider',
    }
  },
  ];
}
