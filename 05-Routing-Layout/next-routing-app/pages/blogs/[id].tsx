//리액트 혹은 use 접두사로 시작하는 재사용 가능한 함수

//프로그래밍적으로 라우팅 처리와 정보를 관리하는 useRouter훅 참조
//라우팅 주소내 정보 추출과 로직을 위한 페이지 이동처리시 주로 사용하는 훅\
import { BlogType } from '@/interface/blog';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Blog = () => {
  //라우터 훅을 생성
  const router = useRouter();

  const [blog, setBlog] = useState<BlogType>({
    id: 1,
    title: 'Introduction to Next.js',
    content:
      'Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites.',
    view_cnt: 120,
    display: true,
    createdAt: '2024-01-01T09:00:00Z',
    updatedAt: '2024-01-02T10:00:00Z',
  });

  //라우팅주소 파라메터방식(/blogs/1)
  console.log('URL주소에서 추출한 게시글 고유번호:', router.query.id);

  return (
    <div className="h-[500px]">
      단일 Blog 페이지-게시글번호:{router.query.id}
      글번호: {blog.id} <br />
      제목: {blog.title} <br />
      내용: {blog.content} <br />
      작성일자: {blog.createdAt} <br />
      <button onClick={() => router.push('/blogs')}>목록이동</button>
    </div>
  );
};

export default Blog;
