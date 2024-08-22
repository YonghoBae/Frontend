import { Message } from '@/interfaces/message';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { socket } from '@/library/socket';
import { GlobalContext } from '@/library/globalContext';

const Chat = () => {
  const router = useRouter();

  const { globalData, setGlobalData } = useContext(GlobalContext);

  const [memberToken, setMemberToken] = useState<any>();

  const [channel, setChannel] = useState<number>(0);

  const [message, setMessage] = useState<string>('');

  const [messageList, setMessageList] = useState<Message[]>([
    {
      member_id: 1,
      name: 'Alice',
      profile: 'https://example.com/profiles/alice.jpg',
      message: 'Hello! How are you?',
      send_date: '2024-08-20T14:00:00Z',
    },
    {
      member_id: 2,
      name: 'Bob',
      profile: 'https://example.com/profiles/bob.jpg',
      message: "I'm good, thanks! How about you?",
      send_date: '2024-08-20T14:05:00Z',
    },
    {
      member_id: 3,
      name: 'Charlie',
      profile: 'https://example.com/profiles/charlie.jpg',
      message: "Hey everyone, what's up?",
      send_date: '2024-08-20T14:10:00Z',
    },
  ]);

  //최초 마운팅 되는 시점에 실행되는 useEffect
  //next.config.mjs 파일 내 reactStrictMode(엄격모드)값을 false로 변경해야 정확히 1회만 실행
  //채팅서버와 연결되는 클라이언트 채팅 소켓 객체 생성 및 각종 채팅 이벤트 기능 구현영역
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (localStorage.getItem('token') == undefined) {
      router.push('/login');
    }

    setMemberToken(token as string);

    //서버소켓 연결
    socket.connect();
    //서버소켓과 연결이 완료되면 실행되는 이벤트처리함수
    //서버 소켓과 연결이 완료되면 자동으로 client 소켓에서 connect이벤트가 실행되고
    //connect이벤트가 실행되면 처리할 이벤트 처리할 기능 구현
    socket.on('connect', () => {
      console.log('정상적으로 서버소켓과 연결 완료');
    });

    //disconnect 이벤트는 서버소켓에 끊어진 경우 발생하는 이벤트
    //서버와의 연결소켓이 끊어진경우 처리할 기능을 핸들러함수에서 처리
    //소켓 시스템 이벤트
    socket.on('disconnect', () => {
      console.log('서버소켓 연결 종료');
    });

    //개발자 정의 클라이언트 소켓 이벤트 수신기 정의
    //socket.on('클라이언트 이벤트 수신기명',서버에서 전달해준 데이터를 받는 함수 정의)
    socket.on('receiveAll', (msg: Message) => {
      console.log('서버소켓에서 전달된 데이터 확인-receiveAll:', msg);
      setMessageList(prev => [...prev, msg]);
    });

    //해당 채팅 컴포넌트가 화면에서 사라질때(언마운팅시점)
    //소켓관련 이벤트를 모두 제거해줘야함. 그렇지 않으면 메시지를 여러번 수신할수있음
    return () => {
      //socket.off(클라이언트 이벤트 수신기명); // 이벤트 제거
      socket.off('connect');
      socket.off('disconnect');
      socket.off('receiveAll');
    };
  }, []);

  //useEffect훅은 CSR환경에서 작동되고 useRouter훅은 SSR/CSR순서로 2번 작동
  //useEffect훅에서 useRouter훅을 이용해 URL키값이 추출안되는 문제는 useRouter.isReady값을 이용해 해결가능
  //useRouter.isReady 값이 기본은 false->true로 변경되는 시점에 관련 기능 구현하면 됨
  useEffect(() => {
    console.log('현재 URL주소에서 사용자 고유번호 추출:', router.query.cid);

    if (router.query.cid != undefined) {
      setChannel(Number(router.query.cid));
    }
  }, [router.isReady]);

  useEffect(() => {
    //채팅방 입장처리하기
    console.log('채팅방 채널이 변경되었습니다.', channel);
    if (channel > 0) {
      console.log('전역 데이터 정보 확인하기:', globalData);
    }
  }, [channel]);

  const sendMessage = () => {
    const msgData = {
      member_id: globalData.member.member_id,
      name: globalData.member.name,
      profile: `http://localhost:5000/img/user${globalData.member.member_id}}.png`,
      message: message,
      send_date: Date.now().toString(),
    };
    //채팅서버소켓으로 메시지를 전송
    //socket.emit('서버이벤트명',메시지데이터);
    socket.emit('broadcast', msgData);

    //메시지 입력박스 초기화
    setMessage('');
  };

  return (
    <div className="flex h-screen antialiased text-gray-800 mt-14 pb-10">
      <div className="flex flex-row h-full w-full overflow-x-hidden">
        <div className="flex flex-col flex-auto h-full p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
            {/* 메시지 목록 출력영역 */}
            <div className="flex flex-col h-full overflow-x-auto mb-4">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  {messageList.map((msg, index) =>
                    msg.member_id === globalData.member.member_id ? (
                      <div
                        key={index}
                        className="col-start-6 col-end-13 p-3 rounded-lg"
                      >
                        <div className="flex items-center justify-start flex-row-reverse">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            {msg.name}
                          </div>
                          <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                            <div>{msg.message}</div>
                            <div className="absolute w-[200px] text-right text-xs bottom-0 right-0 -mb-5 text-gray-500">
                              {msg.name} {msg.send_date}
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        key={index}
                        className="col-start-1 col-end-8 p-3 rounded-lg"
                      >
                        <div className="flex flex-row items-center">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                            {msg.name}
                          </div>
                          <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                            <div>{msg.message}</div>
                            <div className="absolute w-[200px] text-right text-xs bottom-0 right-0 -mb-5 text-gray-500">
                              {msg.name} {msg.send_date}
                            </div>
                          </div>
                        </div>
                      </div>
                    ),
                  )}

                  {/* 왼쪽 다른 사용자 메시지 출력 영역 */}
                  {/* <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>Hey How are you today?</div>
                      </div>
                    </div>
                  </div> */}

                  {/* 오른쪽 본인 메시지 출력영역 */}
                  {/* <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* 메시지 입력 및 보내기 영역 */}
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
              {/* 파일첨부버튼영역 */}
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                </button>
              </div>

              {/* 메시지 입력요소 영역 */}
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    name={message}
                    value={message}
                    onChange={e => {
                      setMessage(e.target.value);
                    }}
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                </div>
              </div>

              {/* 메시지 전송버튼 영역 */}
              <div className="ml-4">
                <button
                  type="button"
                  onClick={sendMessage}
                  className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                >
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
