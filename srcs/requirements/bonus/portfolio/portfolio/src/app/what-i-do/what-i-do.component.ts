import { AfterViewInit, Component, OnInit } from '@angular/core';
import { faCoffee, faDatabase } from '@fortawesome/free-solid-svg-icons';
import {
  faAngular,
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
  faSass,
  faDocker,
  faGithub,
  faCss3,
} from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'portfolio-what-i-do',
  templateUrl: './what-i-do.component.html',
  styleUrls: ['./what-i-do.component.scss'],
})
export class WhatIDoComponent implements OnInit, AfterViewInit {
  faCoffee = faCoffee;
  faAngular = faAngular;
  faCss3Alt = faCss3Alt;
  faHtml5 = faHtml5;
  faJs = faJs;
  faNodeJs = faNodeJs;
  faSass = faSass;
  faDocker = faDocker;
  faGithub = faGithub;
  faDatabase = faDatabase;
  faCss3 = faCss3;
  constructor() {}

  checkVisibility() {
    const whatIDo = document.getElementById('my-skills');
    const animatedPicture = document.getElementById('animated-picture');
    // const whatIDoPosition = whatIDo?.getBoundingClientRect().top;
    // console.log('checkVisibility called', whatIDoPosition);
    // const screenPosition = window.innerHeight / 1.3;
    // if (whatIDoPosition && whatIDoPosition < screenPosition) {
    //   whatIDo.classList.add('my-skill-show');
    // }
    const triggerWhatIDo = (window.innerHeight / 5) * 4;
    if (!whatIDo) return;
    if (whatIDo?.getBoundingClientRect().top < triggerWhatIDo) {
      whatIDo?.classList.add('my-skills-show');
    }
    if (!animatedPicture) return;
    if (animatedPicture?.getBoundingClientRect().top < triggerWhatIDo) {
      animatedPicture?.classList.add('my-skills-show');
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.checkVisibility();
    window.addEventListener('scroll', this.checkVisibility);
  }
}
