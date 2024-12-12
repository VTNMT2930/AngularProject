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
import { Detail1Component } from './components/detail/detail1/detail1.component';
import { Detail2Component } from './components/detail/detail2/detail2.component';
import { Detail3Component } from './components/detail/detail3/detail3.component';
import { Detail4Component } from './components/detail/detail4/detail4.component';

import {NgxPaginationModule} from 'ngx-pagination';

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
    Detail1Component,
    Detail2Component,
    Detail3Component,
    Detail4Component

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
