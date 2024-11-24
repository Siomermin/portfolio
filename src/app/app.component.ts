import { Component, HostListener, Renderer2 } from '@angular/core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkMode: boolean = false;
  faSun = faSun;
  faMoon = faMoon;

  constructor(private renderer: Renderer2) {
    this.initializeTheme();
  }

  showButton: boolean = true; 

  // Detectar el desplazamiento
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY <= 100;
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? 'dark' : 'light';
    this.renderer.setAttribute(document.body, 'data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    this.isDarkMode = savedTheme === 'dark';
    this.renderer.setAttribute(document.body, 'data-theme', savedTheme);
  }
}
