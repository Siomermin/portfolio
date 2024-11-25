import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  userData: any;
  pinnedRepos: any[] = [];

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUser().subscribe((data) => {
      this.userData = data;
    });

    this.githubService.getRepos().subscribe((repos) => {
      console.log(repos);
      this.pinnedRepos = repos;
    });
  }
 
}
