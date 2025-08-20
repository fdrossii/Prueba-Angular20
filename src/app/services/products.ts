import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProductsServices{
  
  private products: Product[] = [{
      id: 1,
      name: 'Honda Transa LP',
      description: 'Ideal para ciudad',
      price: 6500,
      imgUrl: '/img/honda-transalp.jpg'
    },
    {
      id: 2,
      name: 'Kawasaky 600',
      description: 'Potente y elegante',
      price: 9200,
      imgUrl: '/img/kawasaky 600.jpg'
    },
    {
      id: 3,
      name: 'Kawasaky KX 250',
      description: 'Moderna y económica',
      price: 3900,
      imgUrl: '/img/kawasaky-kx250.jpg'
    },
   {
      id: 4,
      name: 'Suzuki 1200',
      description: 'Moderna y económica',
      price: 13900,
      imgUrl: '/img/suzuki-1200.jpg'
   }]

   constructor(){}

   getProducts(): Product[]{
      return this.products;    
   }
}
