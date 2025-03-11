export = CustomWebComponentCustomEvent;
declare class CustomWebComponentCustomEvent<T> extends CustomEvent {
  constructor(type: string, caller: T);
  readonly caller: T;
  static readonly BaseType: string;
}
