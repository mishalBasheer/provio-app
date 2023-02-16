import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  getErroMsg(message: string) {
    // switch (message) {
    //   case 'EMAIL_NOT_FOUND':
    //     return 'Email Not Found';
    //   case 'INVALID_PASSWORD':
    //     return 'Invalid Password';
    //   default:
    //     return 'Unknown Error';
    // }
    return message;
  }
}
