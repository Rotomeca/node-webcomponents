import JsEvent from '@rotomeca/event';
import HTMLCustomInternalsElement from './HTMLCustomInternalsElement';

export = HTMLCustomFormElement;

declare namespace Rotomeca {
  namespace Front {
    type ValueChangedCallback = (
      value: string,
      caller: HTMLCustomFormElement,
    ) => void;
  }
}

declare abstract class HTMLCustomFormElement extends HTMLCustomInternalsElement {
  constructor();
  onvalueChanged: JsEvent<Rotomeca.Front.ValueChangedCallback>;
  value: string;
  protected abstract _p_setValue(value: string): void;
  protected abstract _p_getValue(): string;
  static formAssociated: boolean;
}
