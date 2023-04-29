import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>('https://fakestoreapi.com/products');
  }

  getProduct(id: number) {
    return this.http.get<any>('https://fakestoreapi.com/products/' + id);
  }

  addProduct(model: any) {
    return this.http.post<any>('https://fakestoreapi.com/products', model);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>('https://fakestoreapi.com/products/' + id);
  }
}
