import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Product, ProductService } from '../../services/product.service';
import { CurrencyPipe } from '../pipes/CurrencyPipe.pipe';
import { upperCasePipe } from '../pipes/Uppercase.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf, CommonModule,CurrencyPipe,upperCasePipe],
})
export class HomeComponent {

  // products = [
  //   { name: 'samba og', price: 400000, image: '' },
  //   { name: 'nike', price: 2250000, image: 'assets/Local/jacket1.webp' },
  //   { name: 'addias', price: 2250000, image: 'assets/Local/shirt2.webp' },
  //   { name: 'Levi', price: 700000, image: 'assets/Local/sweater1.webp' }
  // ]

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart({...product, quantity: 1});
  }

  getStars(rating: number): number[] {
    return new Array(Math.floor(rating)).fill(0);
  }

}
