import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  companias = [
    { nombre: 'Río Uruguay', logo: '../../../assets/rio-uruguay.png' },
    { nombre: 'Federación Patronal', logo: '../../../assets/federacion-patronal.png' },
    { nombre: 'ATM', logo: '../../../assets/atm.png' },
    { nombre: 'Rivadavia', logo: '../../../assets/rivadavia.png' },
    { nombre: 'Mercantil Andina', logo: '../../../assets/mercantil-andina.png' }
  ];
}
