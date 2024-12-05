import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { upperCasePipe } from '../pipes/Uppercase.pipe';


@Component({
  selector: 'app-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']

})
export class ShoppingCartComponent implements OnInit {
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