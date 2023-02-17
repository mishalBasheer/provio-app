import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageServiceService } from '../Storage-services/storage-service.service';

@Injectable({
  providedIn: 'root',
})
export class UtilityServiceService {

  constructor(private _storage: StorageServiceService) {}

}
