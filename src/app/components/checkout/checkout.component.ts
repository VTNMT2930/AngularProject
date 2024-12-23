import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { OrderInfo, OrderProduct, OrderService } from '../../services/order.service';
import { Product, ProductService } from '../../services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
// export class CheckoutComponent {
//   cartItems: any[] = [];
//   totalPrice: number = 0;
//   router: any;

//   constructor(private cartService: CartService) { }

//   ngOnInit() {
//     this.cartService.currentCartItems.subscribe(items => {
//       this.cartItems = items;
//       this.totalPrice = this.cartService.getTotalPrice();
//     });
//   }

//   removeItem(id: number) {
//     this.cartService.removeFromCart(id);
//   }

//   updateQuantity(id: number, quantity: number) {
//     this.cartService.updateQuantity(id, quantity);
//   }

//   checkout() {
//     // Xử lý thanh toán
//     if (this.cartItems.length > 0) {
//       this.router.navigate(['/checkout']);
//     }
//   }
// }
export class CheckoutComponent implements OnInit {
  cartItems: OrderProduct[] = [];
  totalPrice: number = 0;
  orderForm = {
    hotennguoinhan: '',
    sodienthoainhan: '',
    diachinhan: '',
    ghichu: ''
  };

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.cartService.currentCartItems.subscribe(items => {
      // Chuyển đổi định dạng cartItems sang OrderProduct
      this.cartItems = items.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      }));
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  datHang() {
    // Validate form
    if (!this.validateForm()) {
      return false;
    }

    // Tạo đối tượng order để gửi lên server
    const orderData: OrderInfo = {
      hotennguoinhan: this.orderForm.hotennguoinhan,
      sodienthoainhan: this.orderForm.sodienthoainhan,
      diachinhan: this.orderForm.diachinhan,
      ghichu: this.orderForm.ghichu || '',
      products: this.cartItems,
      totalPrice: this.totalPrice
    };

    // Gọi service để submit order
    this.orderService.submitOrder(orderData).subscribe({
      next: (response) => {
        // Xử lý khi đặt hàng thành công
        alert('Đặt hàng thành công!');
        this.cartService.clearCart(); // Xóa giỏ hàng
        this.router.navigate(['/']); // Chuyển đến trang chính
      },
      error: (error) => {
        // Xử lý khi có lỗi
        console.error('Lỗi đặt hàng', error);
        alert('Đặt hàng thất bại. Vui lòng thử lại.');
      }
    });

    return false; // Ngăn form submit mặc định
  }

  // Validate form trước khi submit
  validateForm(): boolean {
    const { hotennguoinhan, sodienthoainhan, diachinhan } = this.orderForm;

    if (!hotennguoinhan || !sodienthoainhan || !diachinhan) {
      alert('Vui lòng điền đầy đủ thông tin');
      return false;
    }

    if (this.cartItems.length === 0) {
      alert('Giỏ hàng trống');
      return false;
    }

    return true;
  }
}
