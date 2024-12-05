import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isSignUpActive = false;

  signUpUser = {
    username: '',
    email: '',
    password: ''
  };

  signInUser = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  togglePanel(isSignUp: boolean) {
    this.isSignUpActive = isSignUp;
  }

  onSignUp() {
    // Kiểm tra tính hợp lệ của dữ liệu trước khi gửi
    this.authService.register(this.signUpUser).subscribe({
      next: (response) => {
        console.log('Đăng ký thành công', response);
        this.notificationService.showSuccess('Đăng ký thành công!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Chi tiết lỗi đăng ký:', err);
        console.error('Trạng thái lỗi:', err.status);
        console.error('Nội dung lỗi:', err.error);
        
        // Xử lý thông báo lỗi chi tiết
        const errorMessage = err.error?.message || 
                             err.error?.error || 
                             'Đăng ký thất bại';
        
        this.notificationService.showError(errorMessage);
      }
    });
  }

  onSignIn() {
    this.authService.login(this.signInUser).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.notificationService.showSuccess('Đăng nhập thành công!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Full error details:', err);
        console.error('Error status:', err.status);
        console.error('Error body:', err.error);
        
        // More detailed error message
        const errorMessage = err.error?.message || 
                             err.error?.error || 
                             'Đăng nhập thất bại';
        
        this.notificationService.showError(errorMessage);
      }
    });
  }
}