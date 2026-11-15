
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: false,
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

  internships = [
    {
      company: 'Reccsar Pvt. Ltd.',
      role: 'Full Stack Web Development Intern',
      duration: 'June 2026 – July 2026',
      type: 'Internship',
      description: 'Gained practical exposure to full-stack web development through hands-on development activities and project-based learning.',
      responsibilities: [
        'Practised frontend and backend web development concepts.',
        'Worked on implementing application features.',
        'Improved understanding of application development workflows.'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development']
    },
    {
      company: 'Pantech E-Learning',
      role: 'Java Full Stack Intern',
      duration: 'June 2025 – July 2025',
      type: 'Internship',
      description: 'Developed foundational knowledge of Java full-stack development through practical exercises and guided learning.',
      responsibilities: [
        'Practised Core Java and object-oriented programming.',
        'Explored database connectivity and web development concepts.',
        'Strengthened programming and problem-solving skills.'
      ],
      technologies: ['Java', 'OOP', 'JDBC', 'MySQL']
    },
    {
      company: 'CodeAlpha',
      role: 'Full Stack Developer Intern',
      duration: 'January 2025 – February 2025',
      type: 'Internship',
      description: 'Worked on full-stack development tasks and strengthened practical programming skills through assigned activities.',
      responsibilities: [
        'Practised building web application features.',
        'Applied frontend development concepts.',
        'Improved debugging and logical problem-solving skills.'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development']
    }
  ];

  keyLearnings = [
    {
      title: 'Practical Development',
      description: 'Understanding how development concepts are applied in real project workflows.'
    },
    {
      title: 'Problem Solving',
      description: 'Improving debugging skills and approaching technical challenges systematically.'
    },
    {
      title: 'Continuous Learning',
      description: 'Adapting to new tools, technologies, and development practices.'
    }
  ];

}
