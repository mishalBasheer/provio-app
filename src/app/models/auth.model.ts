export interface AuthResponseData {
  token: string;
  expirationDate: string;
  user: {
    name: string;
    userid: string;
  };
}
export interface SignUpResponseData {
  regestered:boolean;
}
export interface SignUpData {
  fname: string;
  lname: string;
  email: string;
  password: string;
  org: string;
}
