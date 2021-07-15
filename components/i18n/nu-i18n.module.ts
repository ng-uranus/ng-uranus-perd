import { NgModule } from '@angular/core';

import { zhCN } from './languages/zh-CN';
import { TOKEN_SERVICE_PROVIDER } from './nu-i18n.service';
import { TOKEN } from './nu-i18n.tokens';

@NgModule({
  providers: [{ provide: TOKEN, useValue: zhCN }, TOKEN_SERVICE_PROVIDER],
})
export class NuI18nModule { }
