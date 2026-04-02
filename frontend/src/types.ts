export interface XBlockRuntime {
  handlerUrl: (element: Element | null, action: string) => string;
  notify: (action: string, data: object) => void;
}
