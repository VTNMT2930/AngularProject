import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface OrderInfo {
  hotennguoinhan: string;
  sodienthoainhan: string;
  diachinhan: string;
  ghichu?: string;
  products: OrderProduct[];
  totalPrice: number;
}

export interface OrderProduct {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api/auth'; // URL API của bạn

  constructor(private http: HttpClient) { }

  submitOrder(orderData: OrderInfo): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-order`, orderData);
  }
}