import CustomWebComponentCustomEvent from "./CustomWebComponentCustomEvent";
export = StateChangedEvent;
declare class StateChangedEvent<T> extends CustomWebComponentCustomEvent<T> {
  constructor(state: string, caller: T);
  constructor(state: boolean, caller: T);

  readonly state: string | boolean;
  readonly stateVisible: boolean;
  static readonly TAG: string;
}
