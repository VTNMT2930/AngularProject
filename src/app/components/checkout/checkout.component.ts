import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  cartItems: any[] = [];
  totalPrice: number = 0;
  router: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.currentCartItems.subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  removeItem(id: number) {
    this.cartService.removeFromCart(id);
  }

  updateQuantity(id: number, quantity: number) {
    this.cartService.updateQuantity(id, quantity);
  }

  checkout() {
    // Xử lý thanh toán
    if (this.cartItems.length > 0) {
      this.router.navigate(['/checkout']);
    }
  }
}
