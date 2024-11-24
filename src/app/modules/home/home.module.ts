import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperienceComponent } from './components/experience/experience.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
    
  ]
})
export class HomeModule { }
