import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'] // Corrected this line from `styleUrl`
})

export class ProductComponent implements OnInit {
  products = [
    { name:'Chân váy xếp li mini',price: 3290000,image: 'assets/Local/dress1.webp'},
    { name:'MLB Korea Classic',price: 2990000,image: 'assets/Local/dress2.webp'},
    { name:'Chân váy xếp li mini',price: 290000,image: 'assets/Local/dress3.webp'},
    { name:'Balloon Skirt',price: 500000,image: 'assets/Local/dress9.webp'},
    { name:'Tweet Mini Pleat',price: 590000,image: 'assets/Local/dress5.webp'},
    { name:'Dss Skirt Davies',price: 799000,image: 'assets/Local/dress6.webp'},
    { name:'MLB Xếp Ly Chữ B',price: 1850000,image: 'assets/Local/dress7.webp'},
    { name:'MLB Women Denim',price: 2300000,image: 'assets/Local/dress8.webp'},
    { name:'T-shirt Adidas Purple',price: 1050000,image: 'assets/Local/shirt1.webp'},
    { name:'T-shirt LA Dodgers',price: 1750000,image: 'assets/Local/shirt2.webp'},
    { name:'T-shirt DSW TEE',price:320000,image: 'assets/Local/shirt3.webp'},
    { name:'T-shirt LIKE Popcorn',price: 799000,image: 'assets/Local/shirt4.webp'},
    { name:'T-shirt Teelab Cats ',price: 350000,image: 'assets/Local/shirt5.webp'},
    { name:'T-shirt Bright White',price: 4900000,image: 'assets/Local/shirt6.webp'},
    { name:'T-Shirt Gucci White',price: 2250000,image: 'assets/Local/shirt7.webp'},
    { name:'T-shirt Adidas Rich',price: 750000,image: 'assets/Local/shirt8.webp'},
    { name:'Rib Cardigan Grey',price: 500000,image: 'assets/Local/jacket1.webp'},
    { name:'Teelab Worldwide',price: 550000,image: 'assets/Local/jacket2.webp'},
    { name:'Heart Cardigan Black',price: 540000,image: 'assets/Local/jacket3.webp'},
    { name:'DSS SWEATER PINK',price: 500000,image: 'assets/Local/sweater1.webp'},
    { name:'Diamond Monogram',price: 4490000,image: 'assets/Local/sweater2.webp'},
    { name:'Black Of Exit Angel',price:  599000,image: 'assets/Local/sweater3.jpg'},
    { name:'MLB Megagram',price: 7290000,image: 'assets/Local/jacket4.webp'},
    { name:'Jacket MLB Varsity',price: 4600000,image: 'assets/Local/jacket5.webp'}


  ];

  p: number = 1; // Current page number

  ngOnInit(): void {}

  addToCart(product: { name: string; price: number; image: string; }) {
    // Logic for adding the product to the cart
    console.log('Product added to cart:', product);
  }
}