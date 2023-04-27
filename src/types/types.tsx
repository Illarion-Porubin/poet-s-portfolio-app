
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


export type MainPageContetn = {
  keq: string,
  desc: string,
  text: string
}

export type Articles = {
  _id: string,
  title: string,
  text: string
}
