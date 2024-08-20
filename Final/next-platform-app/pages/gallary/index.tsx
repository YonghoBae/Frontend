import React, { useEffect, useState } from 'react';

const Gallary = () => {
  const [model, setModel] = useState<string>('');
  const [prompt, setPrompt] = useState<string>('');
  const [imageList, setImageList] = useState<any[]>([]);
  const [fileList, setFileList] = useState<any[]>([]);
  const getFileList = async () => {
    const response = await fetch('http://localhost:5000/api/openai/all', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json();

    setFileList(result.data);
  };

  useEffect(() => {
    getFileList();
  }, []);

  const generateSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/openai/dalle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ model, prompt }),
    });

    const result = await response.json();
    console.log('백엔드에서 전달해준 결과값 확인:', result);

    if (result.code === 200) {
      // 예시로 성공 코드를 확인
      await getFileList(); // 새로고침 없이 목록을 업데이트
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto mt-8 max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="m-5 text-center">
          <h1 className="text-2xl font-bold">생성형 이미지 활용하기</h1>
        </div>
        <form className="flex" onSubmit={generateSubmit}>
          <select
            id="model"
            name="model"
            value={model}
            onChange={e => setModel(e.target.value)}
            className="block w-[250px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option value="dall-e-2">Dalle.2</option>
            <option value="dall-e-3">Dalle.3</option>
          </select>

          <input
            id="prompt"
            name="prompt"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            type="text"
            className="block ml-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            type="submit"
            className="rounded-md ml-4 bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create
          </button>
        </form>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {/* 이미지 파일 목록 영역 */}
          {fileList.map((file, index) => (
            <a href="#" key={index} className="group text-sm">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                <img
                  src={file.file_path}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 font-medium text-gray-900">
                {file.contents}
              </h3>
              <p className="italic text-gray-500">{file.title}</p>
              <p className="mt-2 font-medium text-gray-900">
                {file.reg_member_name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallary;
