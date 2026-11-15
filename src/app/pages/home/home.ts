
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

  name = 'Divya X';

  roles = [
    'Software Developer',
    'Java Full Stack Developer',
    'Aspiring Engineer'
  ];

  introduction = `I am a Computer Science and Engineering student
  passionate about building practical software solutions.
  I enjoy learning new technologies, solving problems,
  and turning ideas into useful applications.`;

  skills = [
    'Java',
    'JavaScript',
    'Angular',
    'Spring Boot',
    'MySQL',
    'HTML & CSS',
    'REST APIs',
    'Git & GitHub'
  ];

  highlights = [
    {
      value: '8.73',
      label: 'CGPA'
    },
    {
      value: '150+',
      label: 'LeetCode Problems'
    },
    {
      value: '3★',
      label: 'HackerRank Java'
    }
  ];

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Xavierdivya'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/divya-xavier-3b5317290'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/DivyaXavier/'
    }
  ];

}
