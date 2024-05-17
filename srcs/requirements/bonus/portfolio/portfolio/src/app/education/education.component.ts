import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'portfolio-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements AfterViewInit{

  constructor() { }

  checkVisibility() {
    const educationOne = document.getElementById('edu-one');
    const educationTwo = document.getElementById('edu-two');
    const dividers = document.querySelectorAll('.divider');
    const triggerEduOne = (window.innerHeight / 5) * 4.5;

    if (!educationOne || !educationTwo) return;
    
    if (educationOne?.getBoundingClientRect().top < triggerEduOne) {
      educationOne?.classList.add('show-edu-card');
    }
    if (educationTwo?.getBoundingClientRect().top < triggerEduOne) {
      educationTwo?.classList.add('show-edu-card');
    }
    if (dividers) {
      dividers.forEach((divider) => {
        if (divider?.getBoundingClientRect().top < triggerEduOne) {
          divider?.classList.add('show-edu-card');
        }
      });
    }
  }

  ngAfterViewInit(): void {
    this.checkVisibility();
    window.addEventListener('scroll', this.checkVisibility);
  }

}
