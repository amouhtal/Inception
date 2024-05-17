import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Typed from 'typed.js';
import {
  faGit,
  faLinkedin,
  faGithub,
  faCodepen,
} from '@fortawesome/free-brands-svg-icons';
import { ParticlesConfig } from './particles-config';

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'portfolio-who-i-am',
  templateUrl: './who-i-am.component.html',
  styleUrls: ['./who-i-am.component.scss'],
})
export class WhoIAmComponent implements OnInit {
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faCodepen = faCodepen;
  @Output() toggleDarkMode: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    const options = {
      strings: ['Abderrahmane Mouhtal', 'Full Stack Web Developer'],
      typeSpeed: 40,
      backSpeed: 40,
      showCursor: true,
      cursorChar: '|',
      loop: true,
    };
    const typed = new Typed('#typed-element', options);
    this.invokeParticles();
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function () {});
  }


  downloadCv() {
    window.open('/assets/am-resume.pdf', '_blank');
  }
}
