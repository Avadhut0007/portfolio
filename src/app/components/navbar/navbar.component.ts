import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
menuActive: boolean = false;

}
