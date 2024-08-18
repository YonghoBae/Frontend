import { AppContext } from "@/pages/_app";
import { useContext } from "react";

const Child4 = () => {
  //useContext 훅을 이용해 AppContext에서 관리하는 msg 전역데이터와
  //msg전역데이터를 변경할 수 있는 셋함수를 불러옴
  const { msg, setMsg } = useContext(AppContext);

  return <div className="bg-red-400 h-[300px]">Child4:{msg}</div>;
};

export default Child4;
