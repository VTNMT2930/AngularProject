import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { ProductComponent } from './components/product/product.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TShirtComponent } from './components/t-shirt/t-shirt.component';
import { JacketComponent } from './components/jacket/jacket.component';
import { DressComponent } from './components/dress/dress.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { Detail1ProductComponent } from './components/detail1-product/detail1-product.component';
import { Detail2ProductComponent } from './components/detail2-product/detail2-product.component';
import { Detail3ProductComponent } from './components/detail3-product/detail3-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroduceComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingCartComponent,
    NavbarComponent,
    FooterComponent,
    TShirtComponent,
    JacketComponent,
    DressComponent,
    DetailProductComponent,
    Detail1ProductComponent,
    Detail2ProductComponent,
    Detail3ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
