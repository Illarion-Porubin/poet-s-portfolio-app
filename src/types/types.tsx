
export type UserTypes = {
  accessToken?: string;
  refreshToken?: string;
  user: {
    publicId?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    isActivated?: boolean;
    admin?: boolean;
    id?: string;
  }
};

export type AdminTypes = {
  firstName: string | null | undefined;
  lastName: string | null | undefined;
  email: string | null | undefined;
  id: string | null | undefined;
};

export type ComonTypes = {
  accessToken?: string;
  refreshToken?: string;
  publicId?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  isActivated?: boolean;
  admin?: boolean;
  id?: string | null | undefined;
  title?: string,
  text?: string,
};

export type Creativity = {
  _id?: string | null | undefined,
  title?: string,
  text?: string
  createdAt?: number;
}

export type Content = {
  content: {
    main_photo_id?: string,
    main_firstName?: string,
    main_lastName?: string,
    main_email?: string,
    main_title?: string,
    main_btn?: string,
    about_block_title_1?: string,
    about_block_text_1?: string,
    contact_title?: string,
    about_block_title_2?: string,
    about_block_text_2?: string,
  } 
}

export type NewContent = {
  about_block_text_1?: string | undefined,
  about_block_text_2?: string | undefined,
  about_block_title_1?: string | undefined,
  about_block_title_2?: string | undefined,
  contact_title?: string | undefined,
  main_btn?: string | undefined,
  main_email?: string | undefined,
  main_firstName?: string | undefined,
  main_lastName?: string | undefined,
  main_photo_id?: string | undefined,
  main_title?: string | undefined,
  _id?: string | undefined,
} | []

export type SendEmail = {
  name: string,
  email: string,
  text: string,
  to: string
}
