import { ProductService } from './../../product.service';
import { Component, OnInit } from '@angular/core';
import { Tproduct } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss',
})
export class DetailPageComponent implements OnInit {
  product: Tproduct | undefined;
  productId: string | number | undefined;
  constructor(
    private productService: ProductService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productId = this.router.snapshot.params['id']
    console.log(this.productId)
    this.productService.getProductById(this.productId).subscribe((p) => {
      this.product = p
    })
  }
}
