
import { Component } from '@angular/core';

interface LearningItem {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  topics: string[];
  githubUrl: string;
  status: string;
}

interface TrainingDay {
  day: number;
  title: string;
  folder: string;
  url: string;
}

@Component({
  selector: 'app-angular-learning',
  standalone: false,
  templateUrl: './angular-learning.html',
  styleUrl: './angular-learning.scss'
})
export class AngularLearning {

  // HCLTech training information
  trainingStatus = 'In Progress';

  trainingDescription =
    'An ongoing hands-on learning journey through HCLTech training, covering programming, C#, .NET, ASP.NET Core, Web API, databases, Entity Framework Core, TypeScript, Angular, and more. New concepts, practical exercises, and projects are continuously added.';

  // Number of training days currently documented
  get totalTrainingDays(): number {
    return this.hclTrainingDays.length;
  }

  // Category selection
  selectedCategory = 'All';

  categories: string[] = [
    'All',
    'HCLTech Training',
    'Angular',
    'Java Full Stack',
    'Cognizant',
    'DSA'
  ];

  // Training days visibility
  showHclDays = false;

  // Learning areas displayed on the page
  learningItems: LearningItem[] = [

    // 1. HCLTech Training
    {
      title: 'HCLTech Training',
      category: 'HCLTech Training',

      description:
        'An ongoing hands-on technical learning journey covering frontend development, C#, ASP.NET Core, Web API, databases, Entity Framework Core, TypeScript, Angular and more. New concepts, exercises and projects are continuously added.',

      technologies: [
        'C#',
        '.NET',
        'ASP.NET Core',
        'Web API',
        'EF Core',
        'SQL Server',
        'ADO.NET',
        'LINQ',
        'TypeScript',
        'Angular',
        'HTML',
        'CSS',
        'Git'
      ],

      topics: [],

      githubUrl:
        'https://github.com/Xavierdivya/HCL-Training-Handson',

      status: 'In Progress'
    },

    // 2. Angular Learning
    {
      title: 'Angular Learning & Practice',
      category: 'Angular',

      description:
        'Learning Angular concepts and applying them by building a responsive multi-page portfolio website.',

      technologies: [
        'Angular',
        'TypeScript',
        'HTML',
        'SCSS',
        'Angular Router'
      ],

      topics: [
        'Components and Modules',
        'Data Binding',
        'Directives',
        'Pipes',
        'Services and Dependency Injection',
        'Routing and Navigation',
        'Forms',
        'Responsive UI Development'
      ],

      githubUrl:
        'https://github.com/Xavierdivya/divya-angular-portfolio',

      status: 'Currently Learning'
    },

    // 3. Java Full Stack Development
    {
      title: 'Java Full Stack Development',
      category: 'Java Full Stack',

      description:
        'Building backend applications using Java and Spring Boot, integrating REST APIs with MySQL and frontend technologies.',

      technologies: [
        'Java',
        'OOP',
        'JDBC',
        'Spring Boot',
        'Spring Data JPA',
        'MySQL',
        'REST API',
        'HTML',
        'CSS',
        'JavaScript'
      ],

      topics: [
        'Core Java and OOP',
        'Collections Framework',
        'Exception Handling',
        'JDBC and Database Connectivity',
        'Spring Boot',
        'REST API Development',
        'Spring Data JPA',
        'MySQL CRUD Operations'
      ],

      githubUrl:
        'https://github.com/Xavierdivya/Course-Registration-System',

      status: 'Learning & Building Projects'
    },

    // 4. Cognizant Digital Nurture
    {
      title: 'Cognizant Digital Nurture 5.0',
      category: 'Cognizant',

      description:
        'Participating in the Digital Nurture skilling programme, focusing on Java full-stack development and technical problem-solving.',

      technologies: [
        'Java',
        'SQL',
        'Full Stack Development'
      ],

      topics: [
        'Java Programming',
        'SQL Fundamentals',
        'Problem Solving',
        'Full Stack Development',
        'Hands-on Assignments'
      ],

      githubUrl:
        'https://github.com/Xavierdivya/Cognizant-Digital-Nurture-JavaFSE',

      status: 'Skilling Programme'
    },

    // 5. Data Structures and Algorithms
    {
      title: 'Data Structures & Algorithms',
      category: 'DSA',

      description:
        'Practising data structures and algorithms using Java to improve logical thinking and coding problem-solving skills.',

      technologies: [
        'Java',
        'Data Structures',
        'Algorithms'
      ],

      topics: [
        'Arrays',
        'Strings',
        'Sorting and Searching',
        'Linked Lists',
        'Stacks and Queues',
        'Binary Search',
        'Recursion',
        'Trees',
        'Dynamic Programming'
      ],

      githubUrl:
        'https://leetcode.com/u/DivyaXavier/',

      status: 'Continuous Practice'
    }

  ];

  // Filter learning items based on selected category
  get filteredItems(): LearningItem[] {

    if (this.selectedCategory === 'All') {
      return this.learningItems;
    }

    return this.learningItems.filter(
      item => item.category === this.selectedCategory
    );
  }

  // Change selected category
  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  // Expand or collapse HCL training days
  toggleHclDays(): void {
    this.showHclDays = !this.showHclDays;
  }

  // HCLTech training day-wise GitHub links
  hclTrainingDays: TrainingDay[] = [

    {
      day: 1,
      title: 'HTML and CSS Practice',
      folder: 'Day1',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day1'
    },
    {
      day: 2,
      title: 'Portfolio Website',
      folder: 'Day2/portfolio',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day2/portfolio'
    },
    {
      day: 3,
      title: 'Web Development Practice',
      folder: 'Day3',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day3'
    },
    {
      day: 4,
      title: 'Grocery Project',
      folder: 'Day4',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day4'
    },
    {
      day: 5,
      title: 'Student Management System',
      folder: 'Day5',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day5'
    },
    {
      day: 6,
      title: 'Practice Projects',
      folder: 'Day6',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day6'
    },
    {
      day: 7,
      title: 'Leave Management API',
      folder: 'Day7',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day7'
    },
    {
      day: 8,
      title: 'Vehicle Rental System',
      folder: 'Day8',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day8'
    },
    {
      day: 9,
      title: 'Training Management System',
      folder: 'Day9',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day9'
    },
    {
      day: 10,
      title: 'LINQ Practice',
      folder: 'Day10',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day10'
    },
    {
      day: 11,
      title: 'Event Management',
      folder: 'Day11/EventManagementDemo',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day11/EventManagementDemo'
    },
    {
      day: 12,
      title: 'JSON Practice',
      folder: 'Day12/JSONDemo',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day12/JSONDemo'
    },
    {
      day: 13,
      title: 'File Handling',
      folder: 'Day13/FileHandling',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day13/FileHandling'
    },
    {
      day: 14,
      title: 'Course Management',
      folder: 'Day14',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day14'
    },
    {
      day: 15,
      title: 'DBMS Learning',
      folder: 'Day15',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day15'
    },
    {
      day: 16,
      title: 'Git Learning',
      folder: 'Day16',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day16'
    },
    {
      day: 17,
      title: 'Asynchronous Programming',
      folder: 'Day17/Async Learning',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day17/Async%20Learning'
    },
    {
      day: 18,
      title: 'Student Course Management – ADO.NET',
      folder: 'Day18/StudentCourseManagement',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day18/StudentCourseManagement'
    },
    {
      day: 19,
      title: 'Student Course Management – EF Core',
      folder: 'Day19/StudentCourseEFCore',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day19/StudentCourseEFCore'
    },
    {
      day: 20,
      title: 'Hands-on Practice',
      folder: 'Day20',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day20'
    },
    {
      day: 21,
      title: 'Web API Practice',
      folder: 'Day21/WebApiPractice',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day21/WebApiPractice'
    },
    {
      day: 22,
      title: 'Hands-on Practice',
      folder: 'Day22',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day22'
    },
    {
      day: 23,
      title: 'Resource-Based Authorization',
      folder: 'Day23',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day23'
    },
    {
      day: 24,
      title: 'Middleware Practice',
      folder: 'Day24',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day24'
    },
    {
      day: 25,
      title: 'Combined Backend Practice',
      folder: 'Day25',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day25'
    },
    {
      day: 26,
      title: 'MVC Learning – Product Management',
      folder: 'Day26/ProductManagementMVC_.NET',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day26/ProductManagementMVC_.NET'
    },
    {
      day: 27,
      title: 'Revision and Modules',
      folder: 'Day27/Modules',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day27/Modules'
    },
    {
      day: 28,
      title: 'TypeScript Learning',
      folder: 'Day28/Typescript',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day28/Typescript'
    },
    {
      day: 29,
      title: 'Angular Learning',
      folder: 'Day29/Angular',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day29/Angular'
    },
    {
      day: 30,
      title: 'Pipes and Directives',
      folder: 'Day30',
      url: 'https://github.com/Xavierdivya/HCL-Training-Handson/tree/main/Day30'
    }

  ];

}
