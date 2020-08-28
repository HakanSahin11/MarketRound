import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class ItemService {
  url = 'https://localhost:44318/api/product';

  constructor(private http: HttpClient) { }

  register(userData) {
    return this.http.post<any>(this.url, userData);
  }
}