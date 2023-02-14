import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageServiceService } from '../Storage-services/storage-service.service';

@Injectable({
  providedIn: 'root',
})
export class UtilityServiceService {
  
  //behavioural subject to emit the current tab position
  private subject$ = new BehaviorSubject<string | null>(this._storage.getTab());
 
  constructor(private _storage: StorageServiceService) {}
  
  //change current tab
  onChangeSelect(tab: string) {
    //changing current tab from the local storage using Storage Service
    this._storage.setTab(tab);
    this.subject$.next(this._storage.getTab());
  }

  //get current tab data as observable
  onGetSelect(): Observable<string | null> {
    return this.subject$.asObservable();
  }
}
