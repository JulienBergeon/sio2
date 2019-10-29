import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) //creé un singleton de cette injection, si on enleve ca, ils auront chacun leur instance
export class ApiService {

  constructor(private readonly http: HttpClient) { } //shift + alt + o enleve les import inutiles

  get(route: string, data?: any): Observable<any>{
    const params: HttpParams = new HttpParams({fromObject: data});
    return this.http.get(route, {params});
  }
  post(route: string, data: any): Observable<any>{
    return this.http.post(route, data); //le data est mis automatiquement dans body
  }

}
