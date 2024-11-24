import { Component, Input } from '@angular/core';
import { faUser, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
 
@Component({
  selector: 'home-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() userData: any;

  faUser = faUser;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}
