import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Tproduct } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{
    products: Tproduct[] | undefined
    constructor(private productService: ProductService){}
    ngOnInit(){
      
      this.productService.getProduct().subscribe((productList) => {
        this.products = productList
      })
    }
}
