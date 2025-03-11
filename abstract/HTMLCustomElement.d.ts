import JsEvent from "@rotomeca/event";

declare class HTMLCustomElement extends HTMLElement {
  constructor();
  onstatechanged: JsEvent;
  oncustomelementloaded: JsEvent;
  readonly linkedTemplate: HTMLTemplateElement | null;
  connectedCallback(): void;
  disconnectedCallback(): void;
  attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string,
  ): void;
  static readonly observedAttributes: string[];
}
