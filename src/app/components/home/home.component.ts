import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';
import { NotificationService } from '../../services/notification.service';
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
    private cartService: CartService,
    private notificationService: NotificationService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    if (this.authService.isLoggedIn()) {
      this.cartService.addToCart({...product, quantity: 1});
      this.notificationService.showSuccess("Thêm vào giỏ hàng thành công!")
    }
    else {
      this.notificationService.showError('Vui lòng đăng nhập để thêm vào giỏ hàng');
      this.router.navigate(['/DangNhap']);
    }
    
  }

  getStars(rating: number): number[] {
    return new Array(Math.floor(rating)).fill(0);
  }

}
