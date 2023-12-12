import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  template: `
    <main>
      <header class="app-home"  >
        <img class="brand-logo" src="/assets/edusoft-brand.png" 
        alt="logo" aria-hidden="true" 
        width="70" height="70">
      </header>
    <section class="content">
    <router-outlet></router-outlet>
    </section>
    <!-- <section class="contact-us">
    <app-contact-us></app-contact-us>
    </section> 
    </main> -->
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes';
}
