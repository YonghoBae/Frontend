export type Message = {
  member_id: number;
  name: string;
  profile: string;
  message: string;
  send_date: string;
};

export type ChannelCreate = {
  channel_name: string;
  user_limit: number;
  channel_state_code: ChannelState;
};

export type Channel = {
  channel_id: number; // 채널 고유 ID
  community_id: number; // 소속 커뮤니티 ID
  category_code: number; // 채널 분류 코드 (예: 1: 일대일 채팅, 2: 그룹 채팅)
  channel_name: string; // 채널명
  channel_img_path: string | null; // 채널 대표 이미지 경로 (null 허용)
  user_limit: number; // 최대 접속자 제한 수
  channel_desc: string | null; // 채널 설명 (null 허용)
  channel_state_code: ChannelState; // 채널 상태 코드 (0: 사용 안함, 1: 사용 중)
  reg_date: string; // 등록일시 (ISO 8601 문자열 형식)
  reg_member_id: number; // 등록자 ID
  edit_date: string | null; // 수정일시 (null 허용)
  edit_member_id: number | null; // 수정자 ID (null 허용)
};


export enum ChannelState {
  NotUsed = 0,
  Used = 1,
}
