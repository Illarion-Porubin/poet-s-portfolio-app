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
  firstName: string;
  lastName: string;
  email: string;
  card: string;
  phone: string;
}

export interface ISiteInfo {
  id: string;
  title: string;
  btn: string;
  about_block_title_1: string;
  about_block_text_1: string;
  contact_title: string;
  about_block_title_2: string;
  about_block_text_2: string;
}

export type ContentT = {
  id: string;
  photo_id: string;
  photo_url: string;
  firstName: string;
  lastName: string;
  email: string;
  card: string;
  phone: string;
  title: string;
  text: string;
  btn: string;
  about_block_title_1: string;
  about_block_text_1: string;
  contact_title: string;
  about_block_title_2: string;
  about_block_text_2: string;
};

export interface Creativity {
  _id?: string;
  title: string;
  text: string;
  createdAt?: number;
};

export interface ICreativityData {
  pages: number;
  poems: Creativity[]
}

// export type NewContent = {
//       id: string;
//       about_block_text_1: string;
//       about_block_text_2: string;
//       about_block_title_1: string;
//       about_block_title_2: string;
//       contact_title: string;
//       main_btn: string;
//       main_email: string;
//       main_firstName: string;
//       main_lastName: string;
//       main_phone: string;
//       main_card: string;
//       main_photo_id: string;
//       main_title: string;
//     };

export type SendEmail = {
  name: string;
  email: string;
  text: string;
  to: string;
};
