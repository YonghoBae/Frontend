//CSR(Client Side Rendering)방식으로 UI 표시
//clent.js 파일에 의해 웹브라우저 환경에서 해당 컴포넌트의 최초화면을 렌더링

import { useState, useEffect } from "react";

//공통 타입 참조
import { Article, ArticleTypeCode, BoardTypeCode } from "@/interface/article";

const CSR = () => {
  //게시글 목록 상태 데이터 정의 및 초기값 세팅
  const [articles, setArticles] = useState<Article[]>([]);

  //화면이 최초로 렌더링 되는시점(마운팅시점)을 캐치하기 위해 useEffect훅 사용
  //   useEffect(() => {
  //     //최초 화면 렌더링(CSR) 되기 전에 백엔드 API에서 게시글 목록 가져오기 구현
  //     //동기 방식의 ECMAScript 표준 AJAX 통신 기능인 fecth를 이용해 데이터 가져오기

  //     fetch("http://localhost:5000/api/article/list")
  //       .then((res) => res.json())
  //       .then((result) => {
  //         console.log(result);
  //       });
  //   }, []);

  //비동기 방식으로 useEffect훅과 fetch 함수를 사용한 데이터 처리하기
  useEffect(() => {
    //비동기 fetching 함수 정의하기
    const fetchData = async () => {
      const res = await fetch("http://localhost:5000/api/article/list");
      if (!res.ok) {
        throw new Error("HTTP 호출 에러 발생");
      }
      const result = await res.json();
      setArticles(result.data);
    };

    //비동기 fetching함수를 호출하고 에러발생 예외처리 함수
    fetchData().catch((e) => {
      console.error("백엔드 호출에러발생", e);
    });
  }, []);

  return (
    <div>
      CSR-Client Side Rendering 예시 코드
      <table className="w-full">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>조회수</th>
            <th>아이피</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article) => (
            <tr key={article.article_id}>
              <td>{article.article_id}</td>
              <td>{article.title}</td>
              <td>{article.view_count}</td>
              <td>{article.ip_address}</td>
              <td>{article.reg_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CSR;
