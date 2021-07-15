import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { FormlyWrapperFormFieldComponent } from './wrappers/wrapper-form-field.component';
import { FormlyWrapperFormFieldVerticalComponent } from './wrappers/wrapper-form-field-vertical.component';
import { FormlyFieldCheckboxComponent } from './types/checkbox.component';
import { FormlyFieldInputComponent } from './types/input.component';
import { FormlyFieldSelectComponent } from './types/select.component';
import { FormlyFieldTextareaComponent } from './types/textarea-component';
import { FormlyFieldRadioComponent } from './types/radio.component';
import { FormlyFieldRadioButtonComponent } from './types/radio-button.component';
import { FormlyFieldSwitchComponent } from './types/switch.component';
import { FormlyFieldSliderComponent } from './types/slider.component';
import { FormlyFieldTabsComponent } from './types/tabs.component';
import { FormlyFieldEmptyComponent } from './types/empty.component';
import { FormlyFieldDividerComponent } from './types/divider.component';

const FORMLY_FIELD_COMPONENTS = [
  FormlyFieldCheckboxComponent,
  FormlyFieldInputComponent,
  FormlyFieldSelectComponent,
  FormlyFieldTextareaComponent,
  FormlyFieldRadioComponent,
  FormlyFieldRadioButtonComponent,
  FormlyFieldSwitchComponent,
  FormlyFieldSliderComponent,
  FormlyFieldTabsComponent,
  FormlyFieldEmptyComponent,
  FormlyFieldDividerComponent,
];

const NG_ZORRO_MODULES = [
  NzSelectModule,
  NzInputModule,
  NzInputNumberModule,
  NzCheckboxModule,
  NzRadioModule,
  NzSwitchModule,
  NzSliderModule,
  NzTabsModule,
  NzEmptyModule,
  NzLayoutModule,
  NzFormModule,
  NzDividerModule,
];

const NG_ZORRO_FORMLY_CONFIG = {
  types: [
    { name: 'tabs', component: FormlyFieldTabsComponent, },
    { name: 'checkbox', component: FormlyFieldCheckboxComponent, wrappers: ['form-field'] },
    { name: 'select', component: FormlyFieldSelectComponent, wrappers: ['form-field'] },
    { name: 'input', component: FormlyFieldInputComponent, wrappers: ['form-field'] },
    { name: 'textarea', component: FormlyFieldTextareaComponent, wrappers: ['form-field'] },
    { name: 'radio', component: FormlyFieldRadioComponent, wrappers: ['form-field'] },
    { name: 'radio-button', component: FormlyFieldRadioButtonComponent, wrappers: ['form-field'] },
    { name: 'switch', component: FormlyFieldSwitchComponent, wrappers: ['form-field'] },
    { name: 'slider', component: FormlyFieldSliderComponent, wrappers: ['form-field'] },
    { name: 'empty', component: FormlyFieldEmptyComponent, wrappers: ['form-field'] },
    { name: 'divider', component: FormlyFieldDividerComponent, wrappers: ['form-field'] },
  ],
  wrappers: [
    { name: 'form-field', component: FormlyWrapperFormFieldComponent },
    { name: 'form-field-vertical', component: FormlyWrapperFormFieldVerticalComponent },
  ],
};

@NgModule({
  declarations: [
    ...FORMLY_FIELD_COMPONENTS,
    FormlyWrapperFormFieldComponent,
    FormlyWrapperFormFieldVerticalComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlySelectModule,
    ...NG_ZORRO_MODULES,
    FormlyModule.forRoot(NG_ZORRO_FORMLY_CONFIG),
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
  ],
})
export class NuFormModule { }
