import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface OrderDetails {
  id?: number;
  total: number;
  name?: string;
  payment_status?: 'Unpaid' | 'Paid';
}

export interface PaymentInstruction {
  qrCode: string;
  bankInfo: {
    accountName: string;
    accountNumber: string;
    bankName: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiBaseUrl = 'https://payment-gateway-demo.sepay.dev';

  constructor(private http: HttpClient) {}

  createOrder(total: number): Observable<OrderDetails> {
    return this.http.post<OrderDetails>(`${this.apiBaseUrl}/order.php`, 
      { total }, 
      { 
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } 
      }
    );
  }

  getPaymentInstructions(orderId: number): Observable<PaymentInstruction> {
    return this.http.get<any>(`${this.apiBaseUrl}/order.php?id=${orderId}`).pipe(
      map(response => ({
        qrCode: `https://qr.sepay.vn/img?bank=MBBank&acc=0903252427&template=compact&amount=${response.total}&des=DH${orderId}`,
        bankInfo: {
          accountName: 'Bùi Tấn Việt',
          accountNumber: '0903252427',
          bankName: 'MBBank'
        }
      }))
    );
  }

  checkPaymentStatus(orderId: number): Observable<'Paid' | 'Unpaid'> {
    return this.http.post<{payment_status: 'Paid' | 'Unpaid'}>(
      `${this.apiBaseUrl}/check_payment_status.php`, 
      { order_id: orderId },
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    ).pipe(
      map(response => response.payment_status)
    );
  }
}