export interface IUser {
    _id: string;
    name: string;
  }
  
  export interface ILoginResponse {
    token: string;
    user: IUser;
  }