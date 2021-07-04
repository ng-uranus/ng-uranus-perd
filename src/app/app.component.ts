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
  fields1: FormlyFieldConfig[] = [{
    key: 'input',
    type: 'input',
    defaultValue: 'aaa',
    wrappers: ['form-field-vertical'],
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
    wrappers: ['form-field-vertical'],
    templateOptions: {
      label: 'Checkbox',
      hideLabel: false,
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
    key: 'select',
    type: 'select',
    defaultValue: 'aa',
    wrappers: ['form-field-vertical'],
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
    wrappers: ['form-field-vertical'],
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
    key: 'radio-button',
    type: 'radio-button',
    wrappers: ['form-field-vertical'],
    defaultValue: 'aa',
    templateOptions: {
      label: 'Radio Button',
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
    wrappers: ['form-field-vertical'],
    templateOptions: {
      label: 'Switch',
    }
  },
  {
    key: 'slider',
    type: 'slider',
    wrappers: ['form-field-vertical'],
    templateOptions: {
      label: 'Slider',
    }
  },
  ];

  // tabs
  fields: FormlyFieldConfig[] = [{
    type: 'tabs',
    fieldGroup: [
      {
        templateOptions: { label: 'Personal data' },
        fieldGroup: [
          {
            key: 'firstname',
            type: 'input',
            wrappers: ['form-field-vertical'],
            templateOptions: {
              label: 'First name',
              required: true,
            },
          },
          {
            key: 'age',
            type: 'input',
            wrappers: ['form-field-vertical'],
            templateOptions: {
              type: 'number',
              label: 'Age',
              required: true,
            },
          },
        ],
      },
      {
        templateOptions: { label: 'Destination' },
        fieldGroup: [
          {
            key: 'country',
            type: 'input',
            wrappers: ['form-field-vertical'],
            templateOptions: {
              label: 'Country',
              required: true,
            },
          },
        ],
      },
    ],
  }];

}
