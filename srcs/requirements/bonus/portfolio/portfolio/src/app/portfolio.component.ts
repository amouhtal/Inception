import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'portfolio-root',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent {
  title = 'portfolio';
  darkMode: boolean = false;
  // toggleDarkModeFn(darkMode: boolean): void {
  //   this.darkMode = darkMode;
  // }
  @Output() toggleDarkMode: EventEmitter<boolean> = new EventEmitter();

  toggleDarkModeFn(): void {
    this.toggleDarkMode.emit(!this.darkMode);
    this.darkMode = !this.darkMode;
  }

  emitDarkModeState(event: any) {
    console.log(event);
    this.toggleDarkMode.emit(event);
  }
}
//
