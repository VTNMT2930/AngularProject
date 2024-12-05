import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  href: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>([
    {
      id: 1,
      name: ' MLB Womens Denim ',
      price: 2300000,
      image: 'assets/Local/dress8.webp',
      rating: 4.5,
      href: 'Detail1'
    },
    {
        id: 2,
        name: 'Váy mini xếp tầng ',
        price: 2000000,
        image: 'assets/Local/dress4.jpg',
        rating: 4.5,
        href: 'Detail2'
      },
      {
        id: 3,
        name: 'Diamond Monogram ',
        price: 4490000,
        image: 'assets/Local/sweater2.webp',
        rating: 4.5,
        href: 'Detail3'
      },
      {
        id: 4,
        name: 'T-shirt LA Dodgers ',
        price: 1750000,
        image: 'assets/Local/shirt2.webp',
        rating: 4.5,
        href: 'Detail4'
      }
  ]);

  products$ = this.productsSubject.asObservable();

  getProducts(): Product[] {
    return this.productsSubject.value;
  }

  getProductById(id: number): Product | undefined {
    return this.productsSubject.value.find(product => product.id === id);
  }

  addProduct(product: Product) {
    const current = this.productsSubject.value;
    this.productsSubject.next([...current, product]);
  }
}