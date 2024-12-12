import { Component } from '@angular/core';
import { Product } from '../../../models/product.model';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-detail1',
  templateUrl: './detail1.component.html',
  styleUrl: './detail1.component.css'
})
export class Detail1Component {
  product: Product = {
    id: 1,
    name: 'MLB Women\'s Denim',
    price: 2300000,
    image: 'assets/Local/dress8.webp',
    quantity: 1
  };

  quantity: number = 1;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart({...this.product, quantity: this.quantity });
  }
}
