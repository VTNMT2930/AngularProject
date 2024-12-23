import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  currentUser: User | null = null;
  defaultAvatar = ''; // Thay đổi đường dẫn avatar mặc định

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit() {
    this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/DangNhap']); // Điều hướng về trang đăng nhập
  }

  onLogin(): boolean {
    return !this.authService.isLoggedIn();
  }

  navigateToCart() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/GioHang']);
    } else {
      // Hiển thị thông báo hoặc điều hướng đến trang đăng nhập
      this.notificationService.showError('Vui lòng đăng nhập để truy cập giỏ hàng');
      this.router.navigate(['/DangNhap']);
    }
  }
}