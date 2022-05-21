import { ScriptSet, spliterBuilder } from "./locales";

export type IndexPageScripts = {
  pageTitle: string;
  startWithCommand: string;
  getStarted: string;
};

const scripts: ScriptSet<IndexPageScripts> = {
  en: {
    pageTitle: "Home",
    getStarted: "getStart",
    startWithCommand: "Get started with command",
  },
  ja: {
    pageTitle: "ホーム",
    getStarted: "始める",
    startWithCommand: "次のコマンドを入力してインストールできます。",
  },
  ko: {
    pageTitle: "홈",
    getStarted: "시작하기",
    startWithCommand: "다음 명령어를 입력해서 시작할 수 있습니다.",
  },
};

export const indexSpliter = spliterBuilder<IndexPageScripts>(scripts);
