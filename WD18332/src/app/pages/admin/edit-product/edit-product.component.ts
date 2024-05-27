import { ProductService } from './../../../product.service';
import { Component, OnInit } from '@angular/core';
import { Tproduct } from '../../../interfaces/product';
import { ActivatedRoute, Router,  } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.scss',
})
export class EditProductComponent implements OnInit {
  oneProduct: Tproduct | undefined;
  productID: string | number | undefined;
  productForm: FormGroup = {} as FormGroup;

  constructor(
    private productService: ProductService,
    private Arouter: ActivatedRoute,
    private fb: FormBuilder,
    private navigato: Router
  ) {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      images: ['']
    })
  }

  ngOnInit(): void {
    this.productID = this.Arouter.snapshot.params['id'];
    // console.log(this.productID) Kiểm tra ID xem đã lấy được chưa ?

    this.productService.getProductById(this.productID).subscribe((p) => {
      // console.log(p); check xem đã lấy được data chưa
      this.productForm.patchValue({
        title: p.title,
        price: p.price,
        description: p.description,
        images: p.images
      });
    });
  }

  updateProduct(){
    if(this.productForm.valid){
      this.productService.editProduct(this.productID, this.productForm.value).subscribe(() => {
        alert('Cập nhật thành công')
        this.navigato.navigate(['/admin'])
      })
    }
  }
}
