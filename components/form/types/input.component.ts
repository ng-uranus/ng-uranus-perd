import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'nu-formly-field-input',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input
      *ngIf="to.type !== 'number'; else numberTmp"
      nz-input
      [formControl]="formControl"
      [type]="type"
      [formlyAttributes]="field"
      [class.ng-dirty]="showError"
      [nzSize]="nzSize"
    />
    <ng-template #numberTmp>
      <nz-input-number
        [class.ng-dirty]="showError"
        [nzSize]="nzSize"
        [formControl]="formControl"
        [formlyAttributes]="field">
      </nz-input-number>
    </ng-template>
  `,
})
export class FormlyFieldInputComponent extends FieldType {
  get type() {
    return this.to.type || 'text';
  }

  get nzSize() {
    return this.to!.nzSize || 'default';
  }
}
