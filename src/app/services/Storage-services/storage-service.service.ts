import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageServiceService {

  constructor() { }
  addToken(token:string){
    localStorage.setItem('token',token);
  }
  setTab(tab:string){
    localStorage.setItem('currentTab',tab);
  }
  getTab(){
    return localStorage.getItem('currentTab');
  }
}
