import { ActionType, CounterActionType } from "@/interface/common";
import { counterReducer } from "@/utils/reducers";
import { useReducer, useState } from "react";

//리듀서함수 정의
//리듀서함수(관리하는 상태값 매개변수, 로직처리타입)
// function counterReducer(state: number, action: string): number {
//   //처리 로직 유형에 따른 비지니스로직 처리 후
//   //관리하는 상태값 반환하기, 기본값은 현재 상태값 변환
//   switch (action) {
//     case "plus":
//       return state + 1;
//     case "minus":
//       return state - 1;
//     case "init":
//       return 0;
//     default:
//       return state;
//   }
// }

const ReducerCount = () => {
  //useReducer훅 생성
  //useReducer(리듀서함수-재사용/통합 로직처리함수, 초기데이터값);
  //useReducer()함수는 관리하는 상태값과 해당 리듀서함수를 호출하는 디스패치함수를 반환
  //dispatch의 의미는 이벤트 발생시 해당 이벤트를 처리해주는 함수를 의미
  //dispatch함수명은 임의로 지정 ex) data, dispatchData
  //UI이벤트 발생->디스패치함수호출 ->리듀서함수실행->상태값이 변경됨->화면이 변경된값으로 렌더링됨.
  const [count, dispatchCount] = useReducer(counterReducer, 100);

  return (
    <>
      <div>
        Count page 현재 카운트 값 표시영역
        <div className="text-center mt-4">
          <h1>{count}</h1>
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => dispatchCount({type:CounterActionType.PLUS})}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          증가
        </button>
        <button
          onClick={() => dispatchCount({type:CounterActionType.MINUS})}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          감소
        </button>
        <button
          onClick={() => dispatchCount({type:CounterActionType.INIT})}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          초기화
        </button>
      </div>
    </>
  );
};

export default ReducerCount;
