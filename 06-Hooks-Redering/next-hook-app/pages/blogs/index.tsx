//컴포넌트 내에서의 데이터 상태관리를 위한 useState훅 참조
//현재 컴포넌트의 생애주기(LifeCycle) 관리를 위한 useEffect훅 참조
import { useState, useEffect } from "react";

//중요: useEffect훅을 이용할때는 반드시
//프로젝트의 next.config.mjs파일내 reactStrictMode: false로 설정
//reactStricMode 설정은 개발시에만 사용되고 서비스/배포와는 무관한 설정

import Link from "next/link";

type BlogType = {
  id: number;
  title: string;
  view_cnt: number;
  create_date: string;
};

//게시글 원본데이터 목록(Database)
const originData = [
  {
    id: 1,
    title: "Next.js로 블로그 만들기",
    view_cnt: 150,
    create_date: "2024-01-15",
  },
  {
    id: 2,
    title: "Tailwind CSS 기본 사용법",
    view_cnt: 90,
    create_date: "2024-01-20",
  },
  {
    id: 3,
    title: "React와 TypeScript 시작하기",
    view_cnt: 200,
    create_date: "2024-01-25",
  },
  {
    id: 4,
    title: "JavaScript 비동기 처리 이해하기",
    view_cnt: 175,
    create_date: "2024-02-01",
  },
  {
    id: 5,
    title: "CSS Grid와 Flexbox 차이점",
    view_cnt: 210,
    create_date: "2024-02-10",
  },
  {
    id: 6,
    title: "Python으로 데이터 분석 시작하기",
    view_cnt: 340,
    create_date: "2024-02-18",
  },
];

const BlogList = () => {
  const [searchWord, setSearchWord] = useState<string>("");

  const [blogs, setBlogs] = useState<BlogType[]>([]);

  //검색어 기반 블로그 검색처리함수 정의
  const blogSearch = () => {
    let searchResult: BlogType[] = [];

    if (searchWord.length > 0) {
      const searchResult = originData.filter((item) =>
        item.title.includes(searchWord)
      );
      setBlogs(searchResult);
    } else {
      setBlogs(originData);
    }
  };

  //현재 컴포넌트 최초로 화면에 렌더링되는 시점(Mount)에 실행되는 useEffect훅정의
  //useEffect('초최 마운팅될때 실행할 콜백함수',생애주기시점정의 [] 빈배열의 경우 최초 마운팅되는 시점을 말함)
  useEffect(() => {
    console.log("최초 화면이 나타나는 시점(마운팅 시점)에 호출");

    //최초 해당 컴포넌트가 마운팅(최초1회)될때 백엔드 RESTAPI를 호출해서 블로그 목록을 조회
    //조회해온 블로그 목록데이터를 setBlogs()세터함수를 통해 상태데이터로 저장
    setBlogs(originData);

    //해당 컴포넌트가 사라지는 시점(Umount)에 실행되는 콜백함수(클린업함수) 정의
    return () => {
      console.log("블로그 목록 페이지가 사라지기 전에 실행");
    };
  }, []);

  useEffect(() => {
    console.log("화면내에서 상태데이터가 변경되어 렌더링이 일어날때마다 실행");
  });

  //특정 상태 데이터의 변경을 감지하여 프로그래밍을 구현하고 싶은 경우도 useEffect훅을 사용
  //useEffect('실행할콜백함수',[감지할상태데이터]);
  //감지할 상태데이터 값이 변경될때마다 콜백함수가 실행
  useEffect(() => {
    console.log("검색어가 변경되어 블로그목록을 갱신");
    blogSearch();
  }, [searchWord]);

  return (
    <div>
      <h1 className="m-4">블로그 조회하기</h1>
      {/* 상단 검색어 입력 영역 */}
      <div className="m-4">
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <button type="button" onClick={blogSearch}>
          검색
        </button>
      </div>
      <hr></hr>

      {/* 블로그 검색 결과 목록 표시영역*/}
      <div className="m-4">
        <table>
          <thead>
            <tr>
              <th>글번호</th>
              <th>글제목</th>
              <th>조회수</th>
              <th>등록일자</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={index}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.view_cnt}</td>
                <td>{blog.create_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogList;
