import { useRouter } from 'next/router';
import React, { useState } from 'react';

import {CreateBlog} from '@/interfaces/blog';
import axios from 'axios';

const BlogCreate = () => {
  const router = useRouter();

  const [blog, setBlog] = useState<CreateBlog>({
    title: '',
    contents: '',
    display: 1,
  });

  const blogSubmit= async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    try{
      const response = await axios.post("http://localhost:5000/api/article/create",blog);
      if(response.data.code == 200){
        alert("등록완료");
        router.push("/mypage/blog/list");
      }else{
        console.error('백엔드 에러발생...',response.data.msg);
      }

    }catch(err){
      console.error("백엔드 API호출에러발생");
    }
  }

  return (
    <form onSubmit={blogSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            신규 게시글
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            신규 게시글을 작성합니다.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                글제목
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={blog.title}
                    onChange={(e)=>{setBlog({...blog,title:e.target.value})}}
                    placeholder="제목을 입력해주세요"
                    autoComplete="title"
                    className="block flex-1 border-0  bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor=" contents"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                글내용
              </label>
              <div className="mt-2">
                <textarea
                  id=" contents"
                  name=" contents"
                  value={blog.contents}
                  onChange={(e)=>{setBlog({...blog,contents:e.target.value})}}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="display"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                게시여부
              </label>
              <div className="mt-2">
                <select
                  id=" display"
                  name=" display"
                  value={blog.display}
                  onChange={(e)=>{setBlog({...blog,display:Number(e.target.value)})}}
                  autoComplete=" display-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option value={1}>게시함</option>
                  <option value={0}>게시안함</option>
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="flie"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                첨부파일
              </label>
              <div className="mt-2">
                <input
                  type="file"
                  name="file"
                  className="block border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
      file:bg-gray-50 file:border-0
      file:me-4
      file:py-3 file:px-4
      dark:file:bg-neutral-700 dark:file:text-neutral-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          onClick={() => router.push('/mypage/blog/list')}
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default BlogCreate;
