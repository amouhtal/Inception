import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'portfolio-internship-video',
  templateUrl: './internship-video.component.html',
  styleUrls: ['./internship-video.component.scss'],
})
export class InternshipVideoComponent {
  safeURL: any;
  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/1TztZeg6s_Y?start=33&end=40'
    );
  }
}
