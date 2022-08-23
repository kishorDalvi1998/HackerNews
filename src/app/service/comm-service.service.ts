import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommServiceService {

  constructor(private http:HttpClient) { }

  getData(value):Observable<any>{
    return this.http.get("https://hacker-news.firebaseio.com/v0/item/"+value+".json?print=pretty")
  }
}
