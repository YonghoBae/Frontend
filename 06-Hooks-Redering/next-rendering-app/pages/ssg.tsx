//SSG(Static Site Generation) 렌더링 방식은
//정적인 웹페이지 소스를 개뱔환경 빌드 타임에 미리 만들어서 서버에 배포하고
//배포된 서버의 소스를 그냥 웹브라우저로 해석해주는 방식 적용
//정적웹사이트(단순 웹사이트=db프로그래밍이 필요없는) 만들고 싶을 때
//데이터 등록/변경 주기가 긴 웹사이트를 개발할 떄 주로 사용
//기본적으로 next.js의 모든 컴포넌트 파일은 JSX만 표시할때는 SSG바식으로 작동

import { Article } from "@/interface/article";

const SSG = ({ articles }: { articles: Article[] }) => {
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


//getStaticProps()함수는 SSG
export const getStaticProps = async () => {
  //백엔드에서 게시글 데이터를 조회해와서 해당 컴포넌트의 props데이터로 파라메터를 형식으로 전달
  const res = await fetch("http://localhost:5000/api/article/list");
  const result = await res.json();
  return { props: { articles: result.data } };
};

export default SSG;
