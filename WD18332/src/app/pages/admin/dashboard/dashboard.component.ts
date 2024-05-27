import { Tproduct } from './../../../interfaces/product';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  productId: string | number | undefined
  products: Tproduct[] | undefined;
  constructor(
    private productService: ProductService,
    private Arouter: ActivatedRoute

  ) {}

  ngOnInit() {
    this.productService.getProduct().subscribe((productList) => {
      this.products = productList;
    });
  }

  deleteProduct(id: string | number | undefined){
    if(confirm('Bạn có chắc chắn muốn xóa ?')){
      this.productService.deleteProduct(id).subscribe((data) => {
        alert("Xóa thành công!")
        this.productService.getProduct().subscribe((listNewData) => {
          this.products = listNewData
        })
      })
    }
  }

}
