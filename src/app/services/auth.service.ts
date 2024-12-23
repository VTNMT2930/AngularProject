import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { User } from '../models/user.model';
import { LocalStorageService } from './LocalStorage.service';

@Injectable({
  providedIn: 'root'
})
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/api/auth';
  
//   // BehaviorSubject để quản lý trạng thái người dùng
//   private currentUserSubject = new BehaviorSubject<User | null>(null);
  
//   // Observable public để subscribe
//   public currentUser = this.currentUserSubject.asObservable();

//   constructor(
//     private http: HttpClient,
//     private localStorageService: LocalStorageService
//   ) {
//     // Khôi phục thông tin người dùng từ localStorage khi khởi tạo
//     this.loadUserFromStorage();
//   }

//   // Tải thông tin người dùng từ localStorage
//   private loadUserFromStorage(): void {
//     const storedUserJson = this.localStorageService.getItem('currentUser');
//     try {
//       if (storedUserJson) {
//         const user = JSON.parse(storedUserJson);
//         this.currentUserSubject.next(user);
//       }
//     } catch (error) {
//       console.error('Lỗi phân tích thông tin người dùng:', error);
//       this.localStorageService.removeItem('currentUser');
//     }
//   }

//   // Đăng nhập
//   login(credentials: { username: string, password: string }): Observable<User> {
//     return this.http.post<{token: string, user: User}>(`${this.apiUrl}/login`, credentials).pipe(
//       map(response => {
//         // Lưu token
//         this.localStorageService.setItem('token', response.token);
        
//         // Lưu thông tin người dùng
//         this.localStorageService.setItem('currentUser', JSON.stringify(response.user));
        
//         // Cập nhật BehaviorSubject
//         this.currentUserSubject.next(response.user);
        
//         return response.user;
//       })
//     );
//   }

//   // Đăng ký
//   register(user: User): Observable<User> {
//     return this.http.post<{token: string, user: User}>(`${this.apiUrl}/register`, user).pipe(
//       map(response => {
//         // Lưu token
//         this.localStorageService.setItem('token', response.token);
        
//         // Lưu thông tin người dùng
//         this.localStorageService.setItem('currentUser', JSON.stringify(response.user));
        
//         // Cập nhật BehaviorSubject
//         this.currentUserSubject.next(response.user);
        
//         return response.user;
//       })
//     );
//   }

//   // Đăng xuất
//   logout(): void {
//     // Xóa token và thông tin người dùng
//     this.localStorageService.removeItem('token');
//     this.localStorageService.removeItem('currentUser');
    
//     // Đặt lại BehaviorSubject
//     this.currentUserSubject.next(null);
//   }

//   // Kiểm tra đăng nhập
//   isLoggedIn(): boolean {
//     return !!this.localStorageService.getItem('token');
//   }

//   // Lấy người dùng hiện tại
//   getCurrentUser(): User | null {
//     return this.currentUserSubject.value;
//   }

//   // Cập nhật thông tin người dùng
//   updateUser(updatedUser: User): void {
//     // Lưu thông tin người dùng đã cập nhật vào localStorage
//     this.localStorageService.setItem('currentUser', JSON.stringify(updatedUser));
    
//     // Cập nhật BehaviorSubject
//     this.currentUserSubject.next(updatedUser);
//   }
// }
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/api/auth';

//   constructor(private http: HttpClient) {}
//   // BehaviorSubject để quản lý trạng thái người dùng
//   private currentUserSubject = new BehaviorSubject<User | null>(null);
//   // Observable public để subscribe
//   public currentUser = this.currentUserSubject.asObservable();

//   register(user: User): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, user);
//   }

//   login(credentials: { username: string, password: string }): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login`, credentials);
//   }

//   isLoggedIn() {
//     localStorage.getItem("token")
//   }

//   logout() {
//     localStorage.removeItem("token");
//     localStorage.removeItem("username");
//   }
// }
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.loadUserFromStorage();
  }

  private loadUserFromStorage(): void {
    const storedUser = this.localStorageService.getItem('currentUser');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.currentUserSubject.next(user);
      } catch (error) {
        console.error('Error parsing stored user', error);
        this.localStorageService.removeItem('currentUser');
      }
    }
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      tap((response: any) => {
        if (response.token && response.user) {
          this.localStorageService.setItem('token', response.token);
          this.localStorageService.setItem('currentUser', JSON.stringify(response.user));
          this.currentUserSubject.next(response.user);
        }
      })
    );
  }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        if (response.token && response.user) {
          this.localStorageService.setItem('token', response.token);
          this.localStorageService.setItem('currentUser', JSON.stringify(response.user));
          this.currentUserSubject.next(response.user);
        }
      })
    );
  }

  isLoggedIn(): boolean {
    return !!this.localStorageService.getItem('token');
  }

  logout() {
    this.localStorageService.removeItem('token');
    this.localStorageService.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getCurrentUser(): User | null {
    const userJson = this.localStorageService.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  }
}