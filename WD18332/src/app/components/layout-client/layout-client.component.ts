import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AboutComponent } from '../../pages/about/about.component';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../pages/footer/footer.component';

@Component({
  selector: 'app-layout-client',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    AboutComponent,
    HomePageComponent,
    FooterComponent
  ],
  templateUrl: './layout-client.component.html',
  styleUrl: './layout-client.component.scss'
})
export class LayoutClientComponent {

}
