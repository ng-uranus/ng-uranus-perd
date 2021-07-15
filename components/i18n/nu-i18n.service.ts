import { Inject, Injectable, Optional, Provider, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { zhCN } from './languages/zh-CN';
import { TOKEN } from './nu-i18n.tokens';
import { LocaleData, FullLocaleData } from './nu-i18n.types';

@Injectable()
export class NuI18nService {
  private fullLocaleData: FullLocaleData;
  private change$ = new BehaviorSubject<FullLocaleData>(this.fullLocaleData);

  constructor(@Inject(TOKEN) locale: FullLocaleData | null) {
    this.setLocale(locale || zhCN);
  }

  get change(): Observable<FullLocaleData> {
    return this.change$.asObservable();
  }

  setLocale(locale: FullLocaleData): void {
    if (this.fullLocaleData && this.fullLocaleData.locale === locale.locale) {
      return;
    }
    this.fullLocaleData = locale;
    this.change$.next(locale);
  }

  get locale(): FullLocaleData {
    return this.fullLocaleData;
  }

  getData(path: string): LocaleData {
    return this.fullLocaleData[path] || {};
  }
}

export function TOKEN_SERVICE_PROVIDER_FACTORY(
  exist: NuI18nService,
  locale: FullLocaleData,
): NuI18nService {
  return exist || new NuI18nService(locale);
}

export const TOKEN_SERVICE_PROVIDER: Provider = {
  provide: NuI18nService,
  useFactory: TOKEN_SERVICE_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), NuI18nService], TOKEN],
};
