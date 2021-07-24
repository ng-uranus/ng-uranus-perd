import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NuColumn, NuData } from 'ng-uranus-perd/table';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyFieldConfigCache } from '@ngx-formly/core/lib/components/formly.field.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  result: string;
  @ViewChild('hintStart', { static: true }) hintStart: TemplateRef<any>;
  @ViewChild('hintEnd', { static: true }) hintEnd: TemplateRef<any>;

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
  fields: FormlyFieldConfig[] = [
    {
      key: 'password',
      validators: {
        fieldSame: {
          expression: (control) => {
            const { password, passwordConfirm } = control.value;
            if (!passwordConfirm || !password) {
              return false;
            }

            if (passwordConfirm !== password) {
              return false;
            }
            return true;
          },
          message: 'Password Not Matching',
          errorPath: 'passwordConfirm',
        },
      },
      fieldGroup: [
        {
          key: 'password',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Password',
            required: true,
          },
        },
        {
          key: 'passwordConfirm',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Confirm Password',
            required: true,
          },
        },
      ],
    },
    {
      type: 'date-picker',
      templateOptions: {
        type: 'range',
        hideLabel: true,
      }
    },
    {
      type: 'transfer',
      templateOptions: {
        hideLabel: true,
        nzDataSource: [
          { key: '1', title: 'content1', disabled: false },
          { key: '2', title: 'content2', disabled: true },
          { key: '3', title: 'content3', disabled: false },
          { key: '4', title: 'content4', disabled: true },
          { key: '5', title: 'content5', disabled: false },
        ],
        nzTitles: ['Source', 'Target'],
        nzSelectedKeys: ['0', '2'],
        nzSelectChange: (ret: {}) => {
          console.log('nzSelectChange', ret);
        },
        nzChange: (ret: {}) => {
          console.log('nzChange', ret);
        },
      }
    },
    {
      type: 'time-picker',
      defaultValue: new Date(),
      templateOptions: {
        hideLabel: true,
        nzDefaultOpenValue: new Date(0, 0, 0, 0, 0, 0),
      }
    },
    {
      type: 'cascader',
      defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
      wrappers: ['form-field-vertical'],
      templateOptions: {
        hideLabel: true,
        nzOptions: [
          {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
              {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                  {
                    value: 'xihu',
                    label: 'West Lake',
                    isLeaf: true
                  }
                ]
              },
              {
                value: 'ningbo',
                label: 'Ningbo',
                isLeaf: true
              }
            ]
          },
          {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
              {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                  {
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                    isLeaf: true
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      type: 'button',
      wrappers: ['form-field-vertical'],
      templateOptions: {
        hideLabel: true,
        options: [
          {
            label: 'aa',
            nzType: 'primary',
            nzLoading: true,
          },
          {
            label: 'bb',
            disabled: true,
          }
        ],
      }
    }, {
      type: 'rate',
      defaultValue: 2.5,
      templateOptions: {
        nzAllowHalf: true,
        nzOnHoverChange: ($event) => {
          console.log($event);
        },
      },
    }, {
      type: 'alert',
      templateOptions: {
        nzType: 'success',
      },
      hooks: {
        afterViewInit: (field: FormlyFieldConfigCache) => {
          field.templateOptions.nzMessage = this.hintStart;
          setTimeout(() => {
            field.options._markForCheck(field);
          });
        },
      },
    }, {
      type: 'empty',
      hooks: {
        afterViewInit: (field: FormlyFieldConfigCache) => {
          field.templateOptions.hintStart = this.hintStart;
          field.templateOptions.hintEnd = this.hintEnd;
          setTimeout(() => {
            field.options._markForCheck(field);
          });
        },
      },
    }, {
      key: 'input',
      type: 'input',
      defaultValue: 'aaa',
      wrappers: ['form-field-vertical'],
      templateOptions: {
        label: 'Input',
        placeholder: 'please input.',
        required: true,
      },
      hooks: {
        afterViewInit: (field: FormlyFieldConfigCache) => {
          field.templateOptions.hintStart = this.hintStart;
          field.templateOptions.hintEnd = this.hintEnd;
          setTimeout(() => {
            field.options._markForCheck(field);
          });
        },
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
  fields1: FormlyFieldConfig[] = [{
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
