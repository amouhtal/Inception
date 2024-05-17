import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private baseUrl = 'https://api.github.com/repos/{owner}/{repo}';
  private accessToken = 'your-personal-access-token'; // replace with your actual token

  constructor(private http: HttpClient) {}

  // Function to get detailed information about multiple repositories
  getMultipleRepositoryDetails(repoNames: string[]): Observable<any[]> {
    const observables: Observable<any>[] = repoNames.map((repoName) => {
      const url = this.baseUrl.replace('{owner}', 'amouhtal').replace('{repo}', repoName);

      // Include the Authorization header with the token
      const headers = new HttpHeaders({
        Authorization: `Bearer token`,
      });

      return this.http.get(url, { headers }).pipe(
        map((repositoryInfo: any) => {
          // Calculate repository size in MB
          const repoSizeMB = repositoryInfo.size / 1024;
            console.log(repositoryInfo);
          // Return combined repository details
          return {
            name: repositoryInfo.name,
            description: repositoryInfo.description,
            html_url: repositoryInfo.html_url,
            stars: repositoryInfo.stargazers_count,
            commits: repositoryInfo.commits_url, // You may want to fetch the actual commit information
            language: repositoryInfo.language,
            size: repoSizeMB.toPrecision(2),
          };
        })
      );
    });

    // Use forkJoin to execute all requests in parallel
    return forkJoin(observables);
  }
}