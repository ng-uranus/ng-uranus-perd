import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-switch',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nz-switch
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzCheckedChildren]="to['nzCheckedChildren']"
      [nzUnCheckedChildren]="to['nzUnCheckedChildren']"
      [nzDisabled]="nzDisabled"
      [nzSize]="nzSize"
      [nzLoading]="nzLoading"
      [nzControl]="nzControl">
    </nz-switch>
  `,
})
export class FormlyFieldSwitchComponent extends FieldType {
  get nzDisabled() {
    return this.to!.nzDisabled || false;
  }

  get nzSize() {
    return this.to!.nzSize || 'default';
  }

  get nzLoading() {
    return this.to!.nzLoading || false;
  }

  get nzControl() {
    return this.to!.nzControl || false;
  }
}
