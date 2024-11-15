import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'TrangChu' , component: HomeComponent},
  {path: 'GioiThieu' , component: IntroduceComponent},
  {path: 'SanPham' , component: ProductComponent},
  {path: 'DangNhap' , component: LoginComponent},
  {path: 'DangKy' , component: RegisterComponent},
  {path: 'GioHang' , component: ShoppingCartComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
