import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageServiceService } from '../Storage-services/storage-service.service';

@Injectable({
  providedIn: 'root',
})
export class UtilityServiceService {
  private subject = new BehaviorSubject<string | null>(this._storage.getTab());
  constructor(private _storage: StorageServiceService) {}
  onChangeSelect(tab: string) {
    this._storage.setTab(tab);
    this.subject.next(this._storage.getTab());
  }
  onGetSelect(): Observable<string | null> {
    return this.subject.asObservable();
  }
}
