import { Injectable } from '@angular/core';
import { Tproduct } from './interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseURL = 'http://localhost:3000/products'
  constructor(private http: HttpClient) { }
  getProduct(){
    return this.http.get<Tproduct[]>(this.baseURL)
  }

  getProductById(id: string | number | undefined) {
    return this.http.get<Tproduct>(`${this.baseURL}/${id}`)
  }

  createProduct(product: Tproduct ) {
    return this.http.post(`${this.baseURL}`, product)
  }

  deleteProduct(id: string | number | undefined){
    return this.http.delete(`${this.baseURL}/${id}`)
  }

  editProduct(id: number | string | undefined, product: Tproduct){
    return this.http.put(`${this.baseURL}/${id}`, product)
  }
}
