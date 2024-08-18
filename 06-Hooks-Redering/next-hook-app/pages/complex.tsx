import Child1 from "@/components/child1";
import Child2 from "@/components/child2";
import Child31 from "@/components/child3-1";
import Child32 from "@/components/child3-2";
import Child4 from "@/components/child4";
import Child5 from "@/components/child5";

//전역 메시지 데이터 출력
//useContext 훅은 전역 컨텍스트 영역의 데이터를 추출하기위한 훅
import { use, useContext } from "react";

//App.tsx에서 생성한 전역상태 데이터 참조
import { AppContext } from "./_app";

const Complex = () => {
  //useContext 훅을 이용해 AppContext에서 관리하는 msg 전역데이터와
  //msg전역데이터를 변경할 수 있는 셋함수를 불러옴
  const { msg, setMsg } = useContext(AppContext);

  return (
    <div>
      <h1 className="bg-red-950 h-[600px]">Complex: {msg}</h1>
      <Child1>
        <Child2>
          <Child31>
            <Child4 />
          </Child31>
          <Child32>
            <Child5 />
          </Child32>
        </Child2>
      </Child1>
    </div>
  );
};

export default Complex;
