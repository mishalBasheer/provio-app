import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class S3BucketService {
  constructor(private _http: HttpClient) {}
  getpresignedurls(logNamespace: string, fileType: string) {
    const getheaders = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams()
      .set('fileName', logNamespace)
      .set('fileType', fileType);
    return this._http.get(environment.apiUrl + 'user/getpresignedurl', {
      params: params,
      headers: getheaders,
    });
  }
  uploadfileAWSS3(fileuploadurl: string, contenttype: string, file: File) {
    const headers = new HttpHeaders({
      'Content-Type': contenttype,
      skip: 'true',
    });
    const req = new HttpRequest('PUT', fileuploadurl, file, {
      headers: headers,
    });
    return this._http.request(req);
  }
}
