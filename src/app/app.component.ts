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

  showButton: boolean = true;  // Variable para controlar si mostrar el botón

  // Detectar el desplazamiento
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el scroll es mayor a 100px, ocultar el botón
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
