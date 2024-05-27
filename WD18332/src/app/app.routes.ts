import { Routes } from '@angular/router';
import { LayoutClientComponent } from './components/layout-client/layout-client.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AboutComponent } from './pages/about/about.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutClientComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'home', redirectTo: '' },
      { path: 'detailProduct/:id', component: DetailPageComponent },
      { path: 'about', component: AboutComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'addProduct', component: AddProductComponent },
      { path: 'editProduct/:id', component: EditProductComponent },
    ],
  },
  { path: '**', component: NotfoundComponent },
];
