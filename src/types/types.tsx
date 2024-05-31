export interface IAdmin {
  accessToken?: string;
  refreshToken?: string;
  user: {
    admin: boolean;
    id: string;
    isActivated: boolean;
  };
}

export interface IUserInfo {
  id: string;
  photo_url?: string;
  firstName: string;
  lastName: string;
  email: string;
  card: string;
  phone: string;
}

export interface ISiteInfo {
  id: string;
  title?: string;
  btn?: string;
  about_block_title_1?: string;
  about_block_text_1?: string;
  contact_title?: string;
  about_block_title_2?: string;
  about_block_text_2?: string;
}

export type ContentT = {
  id: string;
  photo_url?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  card?: string;
  phone?: string;
  title?: string;
  text?: string;
  btn?: string;
  about_block_title_1?: string;
  about_block_text_1?: string;
  contact_title?: string;
  about_block_title_2?: string;
  about_block_text_2?: string;
};

export type Creativity = {
  id?: string | null | undefined;
  title?: string;
  text?: string;
  createdAt?: number;
};

export type NewContent = {
      id?: string | undefined;
      about_block_text_1?: string | undefined;
      about_block_text_2?: string | undefined;
      about_block_title_1?: string | undefined;
      about_block_title_2?: string | undefined;
      contact_title?: string | undefined;
      main_btn?: string | undefined;
      main_email?: string | undefined;
      main_firstName?: string | undefined;
      main_lastName?: string | undefined;
      main_phone?: string | undefined;
      main_card?: string | undefined;
      main_photo_id?: string | undefined;
      main_title?: string | undefined;
      _id?: string | undefined;
    };

export type SendEmail = {
  name: string;
  email: string;
  text: string;
  to: string;
};
