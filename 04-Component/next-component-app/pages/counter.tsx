//리액트 로컬데이터 상태과린 훅인 useState훅을 참조
//각종 훅은 use라는 접두사를 사용
import { useState } from 'react';

const Counter = () => {
  //카운트 상태값을 관리할 count변수,세터함수 생성
  //useState('초기값정의')함수가 count,setCount함수를 반환하여 변수에 할당
  //useSTate(0)함수는 배열을 반환하는데 배열의 비구조화 할당문접을 통해 반환되는 배열 내 값을 변수로 할당
  const [count, setCount] = useState<number>(0);

  //count 상태값 초기화 처리 이벤트 처리기(핸들러) 함수정의
  const onInit = (): void => {
    //count 상태값을 변경하려면 무조건 setCount()함수를 통해 변경
    setCount(0);
  };

  //count 상태값 플러스 처리 이벤트 처리기(핸들러) 함수정의
  const handlePlus = (): void => {
    console.log('Pre SetCounter:', count);

    //count 상태값을 변경하려면 무조건 setCount()함수를 통해 변경
    setCount(count+1);

    //setCount(count+1);를 두번 연속 호출하면 count값이 2씩 증가하지 않고 handlePlus함수 호출이 종료되어야
    //최종 count값이 갱신되기에 몇번을 호출해도 한번막 적용

    //변경되기 이전의 값을 prevCount라는 매개변수를 통해서 추출할 수 있음
    //setCount((prevCount) => prevCount + 1);

    //setCount((prevCount) => prevCount + 1);을 연속으로 두번 호출 시 2씩 증가
    //2씩 증가하는 이유는 prevCount 값을 실제 변경된 이전값을 바로 보관하기 떄문에 handlePlus함수가 실행종료되지 않아도 이전값에 변경된 값이 보관
    // setCount((prevCount) => prevCount + 1);

    //setter함수가 실행되는 handlePlus()함수가 완전히 실행이 완료된 후에 최종 count값이 갱신
    console.log('After SetCounter:', count);
  };

  //count 상태값 마이너스 처리 이벤트 처리기(핸들러) 함수정의
  const handleMinus = (): void => {
    //count 상태값을 변경하려면 무조건 setCount()함수를 통해 변경
    setCount(count - 1);
  };

  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-[60px] font-semibold text-indigo-600">{count}</p>
        <p className="mt-6 text-base leading-7 text-gray-600">
          버튼을 클릭해 숫자를 증가 또는 감소 시켜보세요.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button
            onClick={handlePlus}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Plus
          </button>
          <button
            onClick={handleMinus}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Minus
          </button>
          <button
            onClick={onInit}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Init
          </button>
        </div>
      </div>
    </main>
  );
};

export default Counter;
