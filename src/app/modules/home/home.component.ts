import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/github.service';
import { faUser, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  userData: any;
  pinnedRepos: any[] = [];

  faUser = faUser;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  
  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getUser().subscribe((data) => {
      this.userData = data;
      console.log(this.userData);
    });

    this.githubService.getRepos().subscribe((repos) => {
      this.pinnedRepos = repos;
      console.log(this.pinnedRepos);
    });
  }
 
}
