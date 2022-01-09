import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) {
  }

  hello(): Observable<string> {
    return new Observable<string>(observer => {
      var temp =  sessionStorage.getItem("access_token");
      if (temp == null) {
        observer.next( 'null' )
      } else {
        observer.next( temp )
      }
      observer.complete()
    });

   /* const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.httpClient.get("https://end4tawjnxl4skw.m.pipedream.net/api/home",
      {headers, responseType: 'text'});*/
  }

}
