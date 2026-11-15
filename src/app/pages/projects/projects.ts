import { Component } from '@angular/core';
import { PortfolioProject } from '../../shared/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: PortfolioProject[] = [
    {
      title: 'Course Registration System',
      category: 'Full Stack Web Application',
      description:
        'A web application for managing courses and student registrations. It supports course-related CRUD operations using a structured backend architecture.',
      technologies: [
        'Java',
        'Spring Boot',
        'Spring Data JPA',
        'MySQL',
        'HTML',
        'CSS',
        'JavaScript'
      ],
      githubUrl: 'https://github.com/Xavierdivya/Course-Registration-System',
      featured: true
    },
    {
      title: 'Student Management System',
      category: 'Java Database Application',
      description:
        'A Java application that performs student record management using JDBC and MySQL, demonstrating database connectivity and CRUD operations.',
      technologies: ['Java', 'JDBC', 'MySQL', 'OOP'],
      githubUrl: null,
      featured: false
    },
    {
      title: 'EduPath AI',
      category: 'AI-Based Web Application',
      description:
        'An educational web application concept focused on supporting personalized learning through a React frontend, MongoDB, and AI integration.',
      technologies: ['React', 'MongoDB', 'Claude API'],
      githubUrl: 'https://github.com/Xavierdivya/TR-076-The-Noble-Four',
      featured: true
    },
    {
      title: 'Java Quiz Application',
      category: 'Core Java Application',
      description:
        'A quiz application developed using Core Java to practise programming fundamentals, conditional logic, and object-oriented concepts.',
      technologies: ['Java', 'OOP', 'Core Java'],
      githubUrl: null,
      featured: false
    }
  ];

  selectedProject: PortfolioProject | null = null;

  showProjectDetails(project: PortfolioProject): void {
    this.selectedProject = project;
  }

  closeProjectDetails(): void {
    this.selectedProject = null;
  }
}