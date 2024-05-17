import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'portfolio-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  showMenu = true;
  toggleMenu(): void {
    console.log('showMenu', this.showMenu);
    this.showMenu = !this.showMenu;
  }
}
