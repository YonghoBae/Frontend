export type CreateBlog = {
  title: string;
  contents: string;
  display: number;
};

export type Blog = {
  article_id: number;
  board_type_code: number;
  title: string;
  article_type_code: number;
  contents?: string;
  view_count: number;
  ip_address: string;
  is_display_code: number;
  reg_date: Date;
  reg_member_id: number;
  edit_date?: Date | null;
  edit_member_id?: number | null;
}