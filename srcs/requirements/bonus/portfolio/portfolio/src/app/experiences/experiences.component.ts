import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'portfolio-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
})
export class ExperiencesComponent implements AfterViewInit {
  constructor() {}

  checkVisibility() {
    const experienceOne = document.getElementById('exp-one');
    const experienceTwo = document.getElementById('exp-two');

    const triggerExpOne = (window.innerHeight / 5) * 5;

    if (!experienceOne || !experienceTwo) return;

    if (experienceOne?.getBoundingClientRect().top < triggerExpOne) {
      experienceOne?.classList.add('exp-show');
    }
    if (experienceTwo?.getBoundingClientRect().top < triggerExpOne) {
      experienceTwo?.classList.add('exp-show');
    }
  }
  ngAfterViewInit(): void {
    this.checkVisibility();
    window.addEventListener('scroll', this.checkVisibility);
  }
}
