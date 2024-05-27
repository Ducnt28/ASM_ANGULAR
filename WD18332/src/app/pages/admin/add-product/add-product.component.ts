import { ProductService } from './../../../product.service';
import { Component, OnInit } from '@angular/core';
import { Tproduct } from '../../../interfaces/product';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent implements OnInit {
  productNew: Tproduct = {} as Tproduct;
  productForm: FormGroup = {} as FormGroup;

  constructor(
    private productService: ProductService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      images: [''],
    });
  }

  ngOnInit(): void {}

  onHandleSubmit() {
    if (this.productForm.valid) {
      this.productService
        .createProduct(this.productForm.value)
        .subscribe((data) => {
          console.log(data);
          alert('Thêm thành công!');
          this.router.navigate(['/admin']);
        });
    }
  }
}
