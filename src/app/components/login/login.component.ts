import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
    private router: Router
  ) {}

  togglePanel(isSignUp: boolean) {
    this.isSignUpActive = isSignUp;
  }

  onSignUp() {
    this.authService.register(this.signUpUser).subscribe({
      next: (response) => {
        console.log('Đăng ký thành công', response);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Lỗi đăng ký', err);
        // Xử lý lỗi đăng ký
      }
    });
  }

  onSignIn() {
    this.authService.login(this.signInUser).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.error('Lỗi đăng nhập', err);
        // Xử lý lỗi đăng nhập
      }
    });
  }
}