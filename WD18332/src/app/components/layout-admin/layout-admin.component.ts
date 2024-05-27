import { Component } from '@angular/core';
import { DashboardComponent } from '../../pages/admin/dashboard/dashboard.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AddProductComponent } from '../../pages/admin/add-product/add-product.component';
import { EditProductComponent } from '../../pages/admin/edit-product/edit-product.component';

@Component({
  selector: 'app-layout-admin',
  standalone: true,
  imports: [
    RouterOutlet,
    DashboardComponent,
    RouterModule,
    AddProductComponent,
    EditProductComponent
  ],
  templateUrl: './layout-admin.component.html',
  styleUrl: './layout-admin.component.scss'
})
export class LayoutAdminComponent {

}
