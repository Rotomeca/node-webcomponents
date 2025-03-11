export = StyleComponent;

declare namespace Rotomeca {
  namespace Front {
    namespace Helper {
      type RuleIterator = IterableIterator<
        Rotomeca.Front.ObjectRule,
        Rotomeca.Front.ObjectRule,
        Rotomeca.Front.ObjectRule
      >;
      type RuleConstructorOption = {
        css_properties?: Rotomeca.Utils.Helper.Dict<string | number>;
      };
      type RulesDescriptor = Rotomeca.Utils.Helper.Dict<
        Rotomeca.Utils.Helper.Dict<string | number>
      >;
    }

    type ObjectRule = {
      property: string;
      value: string | number;
    };
  }
}

declare class StyleComponent {
  constructor();
  readonly text: string;
  addRule(rule: Rule): StyleComponent;
  addRules(...rules: Rule[]): StyleComponent;
  addCss(
    selector: string,
    { css_properties }?: Rotomeca.Front.Helper.RuleConstructorOption,
  ): StyleComponent;
  addSomeCss(rules: Rotomeca.Front.Helper.RulesDescriptor): StyleComponent;
  addSomeCss(rules: Rule[]): StyleComponent;
  build(): HTMLStyleElement;
  free(): StyleComponent;
  static readonly RuleClass: typeof Rule;
  static CreateRule(
    selector: string,
    { css_properties }?: Rotomeca.Front.Helper.RuleConstructorOption,
  ): Rule;
  static Create(rules: Rotomeca.Front.Helper.RulesDescriptor): StyleComponent;
}

declare class Rule {
  constructor(
    selector: string,
    { css_properties }?: Rotomeca.Front.Helper.RuleConstructorOption,
  );
  readonly selector: string;
  addProp(key: string, value: string | number): Rule;
  addProps(props: Rotomeca.Utils.Helper.Dict<string | number>): Rule;
  addProps(props: Rule): Rule;
  getProp(key: string): string | number;
  deleteProp(key: string): Rule;
  toString(): string;
  [Symbol.iterator](): Rotomeca.Front.Helper.RuleIterator;
  static Create(
    selector: string,
    { css_properties }?: Rotomeca.Front.Helper.RuleConstructorOption,
  ): Rule;
  static Write(rules: Rotomeca.Front.Helper.RulesDescriptor): Rule[];
}
