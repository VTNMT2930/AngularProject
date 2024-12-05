import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsSubject = new BehaviorSubject<Product[]>([
    {
      id: 1,
      name: ' Chân váy xếp li mini ',
      price: 3290000,
      image: 'assets/Local/dress1.webp',
      rating: 4.5
    },
    {
        id: 2,
        name: 'Rib Cardigan Grey ',
        price: 500000,
        image: 'assets/Local/jacket1.webp',
        rating: 4.5
      },
      {
        id: 3,
        name: 'T-shirt Adidas Purple ',
        price: 1050000,
        image: 'assets/Local/shirt1.webp',
        rating: 4.5
      },
      {
        id: 4,
        name: 'DSS SWEATER PINK ',
        price: 500000,
        image: 'assets/Local/sweater1.webp',
        rating: 4.5
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