import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortfolioComponent } from './portfolio.component';
import { WhoIAmComponent } from './who-i-am/who-i-am.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { WhatIDoComponent } from './what-i-do/what-i-do.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { GithubService } from './services/github.service';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { InternshipVideoComponent } from './internship-video/internship-video.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PortfolioComponent,
    WhoIAmComponent,
    NavigationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactMeComponent,
    WhatIDoComponent,
    EducationComponent,
    ExperiencesComponent,
    InternshipVideoComponent,
  ],
  imports: [
    BrowserModule,
    PortfolioRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule, 
  ],
  providers: [GithubService],
  bootstrap: [PortfolioComponent],
})
export class PortfolioModule {}
