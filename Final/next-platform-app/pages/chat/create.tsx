import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { ChannelCreate, ChannelState } from '@/interfaces/message';

const ChatCreate = () => {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('token') == undefined) {
      router.push('/login');
    }
  }, []);

  const [channel, setChannel] = useState<ChannelCreate>({
    channel_name: '',
    user_limit: 100,
    channel_state_code: ChannelState.Used,
  });

  const channelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:5000/api/channel/create',
        channel,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      if (response.data.code == 200) {
        alert('등록완료');
        router.push('/chat/list');
      } else {
        console.error('백엔드 에러발생...', response.data.msg);
      }
    } catch (err) {
      console.error('백엔드 API호출에러발생');
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
        <form onSubmit={channelSubmit}>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold leading-7 text-gray-900">
              신규 채팅방 개설
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              신규 채팅방을 개설합니다. 아래 정보를 입력해주세요.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label
                htmlFor="channel_name"
                className="block text-sm font-medium text-gray-700"
              >
                채널명
              </label>
              <div className="mt-1">
                <input
                  id="channel_name"
                  name="channel_name"
                  type="text"
                  value={channel.channel_name}
                  onChange={e => {
                    setChannel({ ...channel, channel_name: e.target.value });
                  }}
                  placeholder="채널명을 입력해주세요"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="user_limit"
                className="block text-sm font-medium text-gray-700"
              >
                동접자 인원수
              </label>
              <div className="mt-1">
                <input
                  id="user_limit"
                  name="user_limit"
                  type="number"
                  value={channel.user_limit}
                  onChange={e => {
                    setChannel({ ...channel, user_limit: Number(e.target.value) });
                  }}
                  placeholder="인원수를 입력해주세요"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label
                htmlFor="channel_state_code"
                className="block text-sm font-medium text-gray-700"
              >
                채널 사용 여부
              </label>
              <div className="mt-1">
                <select
                  id="channel_state_code"
                  name="channel_state_code"
                  value={channel.channel_state_code}
                  onChange={e => {
                    setChannel({
                      ...channel,
                      channel_state_code: Number(e.target.value),
                    });
                  }}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value={ChannelState.Used}>사용함</option>
                  <option value={ChannelState.NotUsed}>사용안함</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-end gap-x-4">
            <button
              type="button"
              onClick={() => router.push('/chat/list')}
              className="inline-flex justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              취소
            </button>
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatCreate;
