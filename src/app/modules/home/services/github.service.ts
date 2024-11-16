import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly githubApiUrl = 'https://api.github.com/users/siomermin';
  private readonly reposApiUrl = 'https://api.github.com/users/siomermin/repos?per_page=100';

  private pinnedRepoNames = [
    "relevamiento-visual",
    "tabla-didactica",
    "alarma-de-robo",
   // "chat-aula",
   // "carga-de-credito",
    "AFI-2024"
  ];

  constructor(private http: HttpClient) {}

  getUser(): Observable<any> {
    return this.http.get<any>(this.githubApiUrl);
  }

  getRepos(): Observable<any[]> {
    return this.http.get<any[]>(this.reposApiUrl).pipe(
      map(repos => 
        repos.filter(repo => this.pinnedRepoNames.includes(repo.name))
      )
    );
  }
}