
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar implements OnInit {

  // Mobile menu state
  isMenuOpen = false;

  // Theme state
  isDarkMode = false;

  // Navigation links
  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Learning & Practice', path: '/angular-learning' },
    { label: 'Contact', path: '/contact' },
  ];

  // Runs when the component is initialized
  ngOnInit(): void {

    // Get the previously saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');

    // Restore the saved theme
    this.isDarkMode = savedTheme === 'dark';

    // Apply the theme
    this.applyTheme();
  }

  // Toggle mobile navigation menu
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Close mobile navigation menu
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // Toggle between light and dark themes
  toggleTheme(): void {

    this.isDarkMode = !this.isDarkMode;

    // Save selected theme in localStorage
    localStorage.setItem(
      'portfolio-theme',
      this.isDarkMode ? 'dark' : 'light'
    );

    // Apply selected theme
    this.applyTheme();
  }

  // Apply theme to the entire application
  private applyTheme(): void {

    document.body.classList.toggle(
      'dark-theme',
      this.isDarkMode
    );
  }
}
