import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Blog } from '@/interfaces/blog';
import axios from 'axios';

const BlogList = () => {
  // const BlogList = ({blogs}:{blogs:Blog[]}) => {
  const router = useRouter();

  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    getBlogList();
  }, []);

  async function getBlogList() {
    try {
      const res = await axios.get('http://localhost:5000/api/article/list');
      if (res.data.code == 200) {
        setBlogs(res.data.data);
      } else {
        console.error('서버 에러발생');
      }
    } catch (err) {
      console.error('백엔드 API 호출 에러발생');
    }
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            블로깅 목록
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            여러분들이 가지고 있는 관심주제에 대해 블로깅을 작성해 보세요.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={() => router.push('/mypage/blog/create')}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            게시글 작성
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    글번호
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    제목
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    게시여부
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    아이피주소
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    게시일시
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {blogs.map((blog, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {blog.article_id}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {blog.title}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {blog.is_display_code == 1 ? '게시중' : '게시안함'}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      {blog.ip_address}
                    </td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      {blog.reg_date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  //백엔드에서 게시글 데이터를 조회해와서 해당 컴포넌트의 props데이터 파라메터 형식으로 전달한다.
  const res = await fetch('http://localhost:5000/api/article/list');
  const result = await res.json();
  return { props: { blogs: result.data } };
};

export default BlogList;
