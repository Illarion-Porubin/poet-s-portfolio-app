
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
  } | null
};


export type MainPageContetn = {
  keq: string,
  desc: string,
  text: string
}