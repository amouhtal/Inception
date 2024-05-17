import { AfterViewInit, Component } from '@angular/core';
import { GithubService } from '../services/github.service';

interface GithubProject {
  name: string;
  description: string;
  html_url: string;
  start_count: number;
  language: string;
  size: string;
  branches_count?: number;
}

@Component({
  selector: 'portfolio-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  repoNames = ['matcha-frontend', 'matcha', 'ft_transcendence', 'ft_services', "Inception"];
  projects: GithubProject[] = [];
  constructor(private githubService: GithubService) {
    this.githubService
      .getMultipleRepositoryDetails(this.repoNames)
      .subscribe((data) => {
        data.forEach((project) => {
          this.projects.push(project);
        });
      });
  }

  checkVisibility() {
    const projects = document.querySelectorAll('.project-card');
    const triggerProjects = (window.innerHeight );
    if (!projects) return;

    projects.forEach((project) => {
      if (project?.getBoundingClientRect().top < triggerProjects) {
        project?.classList.add('projects-shows');

      }
    });
  }

  ngAfterViewInit() {
    this.checkVisibility();
    window.addEventListener('scroll', this.checkVisibility);
  }
}
