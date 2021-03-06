import { ScriptSet, spliterBuilder } from "./locales";

export type LayoutScripts = {
  pageTitle: string;
};

const scripts: ScriptSet<LayoutScripts> = {
  en: {
    pageTitle: "Home",
  },
  ja: {
    pageTitle: "γγΌγ ",
  },
  ko: {
    pageTitle: "ν",
  },
};

export const layoutSpliter = spliterBuilder<LayoutScripts>(scripts);
