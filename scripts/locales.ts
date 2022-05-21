export enum Locales {
  En = "en",
  Ja = "ja",
  Ko = "ko",
}

export type ScriptSet<T> = {
  [name in Locales]: T;
};

export class LocaleSpliter<T> {
  constructor(private locale: Locales, private scriptSet: ScriptSet<T>) {}
  public get scripts() {
    return this.scriptSet[this.locale];
  }
}

export function spliterBuilder<T>(scripts: ScriptSet<T>) {
  return function spliter(locale: Locales) {
    return new LocaleSpliter<T>(locale, scripts);
  };
}
