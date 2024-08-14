import { ActionType, CounterActionType } from "@/interface/common";

export function counterReducer(state: number, action: ActionType): number {
  //처리 로직 유형에 따른 비지니스로직 처리 후
  //관리하는 상태값 반환하기, 기본값은 현재 상태값 변환
  const { type } = action;
  switch (type) {
    case CounterActionType.PLUS:
      return state + 1;
    case CounterActionType.MINUS:
      return state - 1;
    case CounterActionType.INIT:
      return 0;
    default:
      return state;
  }
}
