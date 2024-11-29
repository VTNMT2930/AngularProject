import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DressComponent } from './components/dress/dress.component';

import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { JacketComponent } from './components/jacket/jacket.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { TShirtComponent } from './components/t-shirt/t-shirt.component';
import { Detail4Component } from './components/detail/detail4/detail4.component';
import { Detail3Component } from './components/detail/detail3/detail3.component';
import { Detail2Component } from './components/detail/detail2/detail2.component';
import { Detail1Component } from './components/detail/detail1/detail1.component';

const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'TrangChu' , component: HomeComponent},
  {path: 'GioiThieu' , component: IntroduceComponent},
  {path: 'SanPham' , component: ProductComponent},
  {path: 'DangNhap' , component: LoginComponent},
  {path: 'DangKy' , component: RegisterComponent},
  {path: 'GioHang' , component: ShoppingCartComponent},
  {path: 'GioHang' , component: RegisterComponent},
  {path: 'T-shirt' , component: TShirtComponent},
  {path: 'Jacket' , component: JacketComponent},
  {path: 'Dress' , component: DressComponent},
  {path: 'Detail1', component:Detail1Component},
  {path: 'Detail2', component:Detail2Component},
  {path: 'Detail3', component:Detail3Component},
  {path: 'Detail4', component:Detail4Component}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
