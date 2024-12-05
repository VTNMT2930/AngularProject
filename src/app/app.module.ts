import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { ProductComponent } from './components/product/product.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TShirtComponent } from './components/t-shirt/t-shirt.component';
import { JacketComponent } from './components/jacket/jacket.component';
import { DressComponent } from './components/dress/dress.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from "./components/pipes/CurrencyPipe.pipe";
import { NgIf } from '@angular/common';
import { CheckoutComponent } from './components/checkout/checkout.component';

@NgModule({
    declarations: [
        AppComponent,
        IntroduceComponent,
        ProductComponent,
        ShoppingCartComponent,
        NavbarComponent,
        FooterComponent,
        TShirtComponent,
        JacketComponent,
        DressComponent,
        LoginComponent,
        CheckoutComponent
    ],
    providers: [
        provideClientHydration(),
        provideAnimationsAsync()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeComponent,
        FormsModule,
        HttpClientModule,
        CurrencyPipe

    ]
})
export class AppModule { }
