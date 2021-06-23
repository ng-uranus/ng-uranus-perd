import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-radio',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-radio-group [formControl]="formControl">
      <label
        nz-radio
        [nzAutoFocus]="nzAutoFocus"
        *ngFor="let option of to.options | formlySelectOptions: field | async"
        [nzDisabled]="option.disabled"
        [nzValue]="option.value">
          {{ option.label }}
      </label>
    </nz-radio-group>
  `,
})
export class FormlyFieldRadioComponent extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };

  get nzAutoFocus(): boolean {
    return this.to!.nzAutoFocus || false;
  }
}
