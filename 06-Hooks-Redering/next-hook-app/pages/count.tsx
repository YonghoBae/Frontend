import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState<number>(0);

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
          onClick={() => setCount(count + 1)}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          증가
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          감소
        </button>
        <button
          onClick={() => setCount(0)}
          className="ml-3 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          초기화
        </button>
      </div>
    </>
  );
};

export default Count;
