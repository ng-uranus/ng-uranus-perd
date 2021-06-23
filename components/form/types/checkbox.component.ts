import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-checkbox',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label
      nz-checkbox
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzAutoFocus]="nzAutoFocus"
      [nzDisabled]="nzDisabled"
      [nzIndeterminate]="to.nzIndeterminate && formControl.value == null">
        {{ to.label }}
    </label>
  `,
})
export class FormlyFieldCheckboxComponent extends FieldType {
  defaultOptions = {
    templateOptions: {
      nzIndeterminate: true,
      hideLabel: true,
    },
  };

  get nzAutoFocus(): boolean {
    return this.to!.nzAutoFocus || false;
  }

  get nzDisabled(): boolean {
    return this.to!.nzDisabled || false;
  }
}
