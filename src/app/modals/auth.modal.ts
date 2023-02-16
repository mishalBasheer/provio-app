export interface AuthResponseData{
    token:string;
    expiresIn:number;
    user:{
        name:string;
        userid:string;
    };
}