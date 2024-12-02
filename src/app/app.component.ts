import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { routeAnimations } from './animations/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'tecnicaYServicios';
  isNavigating = false;

  constructor(private router:Router)
  {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isNavigating = true;
      } else if (event instanceof NavigationEnd) {
        this.isNavigating = false;
      }
    });
  }

  ngOnInit()
  {
    this.router.navigateByUrl('home');
  }
}
