export interface XBlockRuntime {
  handlerUrl: (element: Element | null, action: string) => string;
  notify: (action: string, data: object) => void;
}

export interface XBlockConfig {
  mfe_config_api: string;
}
