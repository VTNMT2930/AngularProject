import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
addToCart(_t14: { name: string; price: number; image: string; }) {
throw new Error('Method not implemented.');
}
    products = [
    { name: 'Tweet Mini Pleat', price: 590000, image: 'assets/Local/dress5.webp' },
    { name: 'Dss Skirt Davies', price: 799000, image: 'assets/Local/dress6.webp' },
    { name: 'MLB Xếp Ly Chữ B', price: 1850000, image: 'assets/Local/dress7.webp' },
    { name: 'Balloon Skirt', price: 500000, image: 'assets/Local/dress9.webp'},
    { name: 'Rib Cardigan Grey', price: 500000, image: 'assets/Local/jacket1.webp' },
    { name: 'Teelab Worldwide ', price: 550000, image: 'assets/Local/jacket2.webp' },
    { name: 'DSS SWEATER PINK', price:  500000, image: 'assets/Local/sweater1.webp' },
    { name: 'Heart Cardigan Black ', price: 540000, image: 'assets/Local/jacket3.webp' },
    { name: 'T-shirt Adidas Purple ', price: 1050000, image: 'assets/Local/shirt1.webp' },
    { name: 'T-shirt LA Dodgers', price: 1750000, image: 'assets/Local/shirt2.webp' },
    { name: 'T-shirt DSW TEE', price: 320000, image: 'assets/Local/shirt3.webp' },
    { name: 'T-shirt LIKE Popcorn ', price: 799000, image: 'assets/Local/shirt4.webp' }
  ]
} 

