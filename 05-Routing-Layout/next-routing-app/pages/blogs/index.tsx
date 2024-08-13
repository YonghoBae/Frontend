import { useState } from 'react';
import { useRouter } from 'next/router';

import { BlogType } from '@/interface/blog';
import Link from 'next/link';

const BlogList = () => {
  const router = useRouter();

  //게시글 목록 데이터상태 정의 및 초기화(빈배열)
  const [blogs, setBlogs] = useState<BlogType[]>([
    {
      id: 1,
      title: 'Introduction to Next.js',
      content:
        'Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.',
      view_cnt: 120,
      display: true,
      createdAt: '2024-01-01T09:00:00Z',
      updatedAt: '2024-01-02T10:00:00Z',
    },
    {
      id: 2,
      title: 'Understanding Tailwind CSS',
      content:
        'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any design, directly in your markup.',
      view_cnt: 85,
      display: true,
      createdAt: '2024-02-15T11:30:00Z',
      updatedAt: '2024-02-16T12:00:00Z',
    },
    {
      id: 3,
      title: 'TypeScript Basics',
      content:
        'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static type checking at compile-time, which can prevent many common errors.',
      view_cnt: 200,
      display: false,
      createdAt: '2024-03-10T08:45:00Z',
      updatedAt: '2024-03-11T09:15:00Z',
    },
  ]);

  //신규게시글 버튼 클릭시 신규 게시글 페이지로 이동시키기
  //useRouter.push()함수를 이용한 프로그래밍적으로 페이지 이동처리
  const moveDetail = () => {
    router.push('/blogs/new');
  };

  return (
    <div className="h-[500px] ml-4">
      <h1>블로깅 목록</h1>
      <div className="text-right">
        <button
          onClick={moveDetail}
          className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          신규 게시글
        </button>
      </div>

      <table className="w-full ml-4 mr-4 mt-4">
        <thead>
          <tr>
            <th>글번호</th>
            <th>글제목</th>
            <th>조회수</th>
            <th>등록일시</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>글제목입니다.</td>
            <td>1</td>
            <td>2024-05-29</td>
          </tr>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
              <td>
                <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              </td>
              <td>{blog.view_cnt}</td>
              <td>{blog.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogList;
