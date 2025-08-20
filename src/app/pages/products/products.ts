import { Component } from '@angular/core';
import { Product } from '../../services/products';
import { ProductsServices} from '../../services/products';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  productos: Product[] = [];
  constructor(private productsServices: ProductsServices){
    this.productos = this.productsServices.getProducts();
  }
}
