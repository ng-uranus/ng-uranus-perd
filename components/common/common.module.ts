import { ClipboardModule } from '@angular/cdk/clipboard';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NuI18nModule } from 'ng-uranus-perd/i18n';

import { NuClipboardDirective } from './clipboard.directive';

@NgModule({
  imports: [
    CommonModule,
    ClipboardModule,
    NzToolTipModule,
    NuI18nModule,
  ],
  exports: [
    NuClipboardDirective,
  ],
  declarations: [
    NuClipboardDirective,
  ],
  providers: [],
})
export class NuCommonModule { }
