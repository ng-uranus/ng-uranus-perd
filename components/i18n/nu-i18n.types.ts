export interface LocaleData {
  [key: string]: any;
}

export interface FullLocaleData {
  locale: string;
  common: Common;
}

export interface Common {
  copy_tip: string;
}
