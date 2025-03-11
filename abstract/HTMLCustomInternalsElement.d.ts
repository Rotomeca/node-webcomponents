import { HTMLCustomElement } from "./HTMLCustomElement";

export = HTMLCustomInternalsElement;

declare abstract class HTMLCustomInternalsElement extends HTMLCustomElement {
  constructor();
  readonly internals: ElementInternals;
  readonly sate: CustomStateSet;
  abstract _p_main(): void;
  setState(state: string): this;
  removeState(state: string): this;
}