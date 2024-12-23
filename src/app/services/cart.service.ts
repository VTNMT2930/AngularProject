import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { NotificationService } from './notification.service';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  currentCartItems = this.cartItems.asObservable();
  constructor(private authService: AuthService, private notificationService: NotificationService, private router: Router) {}
  addToCart(product: CartItem) {
    const current = this.cartItems.value;
    const existingItem = current.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity++;
    } else {
      current.push({...product, quantity: 1});
    }
    
    this.cartItems.next([...current]);
  }
  getCartItems(): CartItem[] {
    return this.cartItems.value;
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  removeFromCart(productId: number) {
    const current = this.cartItems.value;
    this.cartItems.next(current.filter(item => item.id !== productId));
  }

  getTotalPrice(): number {
    return this.cartItems.value.reduce((total, item) => 
      total + (item.price * item.quantity), 0);
  }

  updateQuantity(productId: number, quantity: number) {
    const current = this.cartItems.value;
    const item = current.find(i => i.id === productId);
    if (item) {
      item.quantity = quantity;
      this.cartItems.next([...current]);
    }
  }
  clearCart() {
    // Đặt giá trị cartItems về mảng rỗng
    this.cartItems.next([]);
  }
}