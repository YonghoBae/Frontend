export interface Article {
    article_id: number;
    board_type_code: BoardTypeCode;
    title: string;
    article_type_code: ArticleTypeCode;
    contents?: string;
    view_count: number;
    ip_address: string;
    is_display_code: DisplayCode;
    reg_date: string;
    reg_member_id: number;
    edit_date?: string|null;
    edit_member_id?: number|null;
  }
  

// 게시판 고유번호 - 1: 공지사항 게시판, 2: 일반 사용자 게시판
export enum BoardTypeCode {
    NOTICE = 1,
    GENERAL = 2
  }
  
  // 게시글 유형 코드 - 0: 일반 게시글, 1: 상단 고정 게시글
  export enum ArticleTypeCode {
    GENERAL = 0,
    TOP_FIXED = 1
  }
  
  // 게시 여부 - 0: 게시 안 함, 1: 게시 함
  export enum DisplayCode {
    HIDDEN = 0,
    VISIBLE = 1
  }
  