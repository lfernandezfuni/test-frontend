import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_SERVER: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public get(endpoint: string, params?: any) {
    return this.http.get(this.urlJoin([this.API_SERVER, endpoint]), params);
  }
  public post(endpoint: string, body: any) {
    return this.http.post(this.urlJoin([this.API_SERVER, endpoint]), body);
  }

  private urlJoin(urls: Array<string>) {
    return urls
      .map(url => {
        if (url.startsWith('/')) { return url.substring(1); }
        return url;
      })
      .map((url) => {
        if (url.endsWith('/')) { return url.substring(0, url.length); }
        return url;
      })
      .join('/');
  }
}
