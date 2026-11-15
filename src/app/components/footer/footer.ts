import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Achievements', path: '/achievements' },
    { label: 'Contact', path: '/contact' },
    { label: 'Learning & Practice', path: '/angular-learning' }
  ];

  socialLinks = [
    {
      label: 'GitHub',
      url: 'https://github.com/Xavierdivya'
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/divya-xavier-3b5317290'
    },
    {
      label: 'LeetCode',
      url: 'https://leetcode.com/u/DivyaXavier/'
    }
  ];
}