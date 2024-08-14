export enum CounterActionType {
  PLUS = "plus",
  MINUS = "minus",
  INIT = "Init",
}

export type ActionType = {
  type: CounterActionType;
};
