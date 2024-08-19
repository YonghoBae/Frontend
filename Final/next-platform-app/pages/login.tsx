import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

//로그인 페이지 컴포넌트
const Login = () => {
  const router = useRouter();

  const [member, setMember] = useState({
    email: '',
    password: '',
  });


  //로그인 UI요소(메일주소/암호) 사용자 입력시 데이터 동기화 처리 함수
  const memberChange = async(e:React.ChangeEvent<HTMLInputElement>) =>{
    setMember({...member,[e.target.name]:e.target.value});
  }

  //로그인 버튼 클릭시 로그인 정보 백엔드 API전달하여 JWT토큰정보 받아옴
  const loginSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try{
      const response =  await fetch("http://localhost:5000/api/member/login",{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(member),
      });

      const result = await response.json();
      console.log('LOGIN AIP에서 반환한 요청 결과값:',result);

      if(result.code == 200){
        console.log("정상적으로 로그인 완료");
        localStorage.setItem('token',result.data);
        router.push('/');
      }else{
        if(result.code==401 && result.msg == "NotExistEmail"){
          alert("해당 메일주소가 존재하지않습니다.");
          return false;
        }
        if(result.code==402 && result.msg == "InCorrectPassword"){
          alert("해당 비밀번호가 일치하지않습니다.");
          return false;
        }
      }
    }catch(err){
      console.error('백엔드 API 호출에러 발생:',err);
    }
  };


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={loginSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={member.email}
                  onChange={memberChange}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={member.password}
                  onChange={memberChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
