import { ScriptSet, spliterBuilder } from "./locales";

export type LayoutScripts = {
  pageTitle: string;
};

const scripts: ScriptSet<LayoutScripts> = {
  en: {
    pageTitle: "Home",
  },
  ja: {
    pageTitle: "ホーム",
  },
  ko: {
    pageTitle: "홈",
  },
};

export const layoutSpliter = spliterBuilder<LayoutScripts>(scripts);
