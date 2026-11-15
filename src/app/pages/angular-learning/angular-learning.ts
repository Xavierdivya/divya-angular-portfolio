import { Component } from '@angular/core';

interface AngularTopic {
  title: string;
  category: string;
  description: string;
  example: string;
  application: string;
  level: string;
}

@Component({
  selector: 'app-angular-learning',
  standalone: false,
  templateUrl: './angular-learning.html',
  styleUrl: './angular-learning.scss'
})
export class AngularLearning {
  userName = 'Divya';
  selectedCategory = 'All';
  showExplanation = false;

  categories = [
    'All',
    'Fundamentals',
    'Data Binding',
    'Components',
    'Advanced Basics'
  ];

  topics: AngularTopic[] = [
    {
      title: 'Components',
      category: 'Fundamentals',
      description: 'Components are the building blocks of an Angular application. Each component controls a part of the user interface.',
      example: '@Component({ selector: "app-home" })',
      application: 'Used to create the Home, About, Projects, and Contact pages.',
      level: 'Beginner'
    },
    {
      title: 'NgModules',
      category: 'Fundamentals',
      description: 'NgModules group related components, directives, pipes, and services into cohesive application units.',
      example: '@NgModule({ declarations: [...], imports: [...] })',
      application: 'Used in this portfolio to organise components and routing.',
      level: 'Beginner'
    },
    {
      title: 'Angular Routing',
      category: 'Fundamentals',
      description: 'The Angular Router allows navigation between different views without reloading the entire application.',
      example: '{ path: "projects", component: Projects }',
      application: 'Connects the Home, About, Experience, Projects, and other pages.',
      level: 'Beginner'
    },
    {
      title: 'Interpolation',
      category: 'Data Binding',
      description: 'Interpolation displays component properties in an HTML template.',
      example: '{{ userName }}',
      application: 'Displays portfolio content such as your name and project titles.',
      level: 'Beginner'
    },
    {
      title: 'Property Binding',
      category: 'Data Binding',
      description: 'Property binding passes a component value to an HTML element property.',
      example: '[href]="profileUrl"',
      application: 'Used to dynamically set profile and project links.',
      level: 'Beginner'
    },
    {
      title: 'Event Binding',
      category: 'Data Binding',
      description: 'Event binding responds to user interactions such as clicks and input events.',
      example: '(click)="toggleMenu()"',
      application: 'Used for the navigation menu, theme button, and project details.',
      level: 'Beginner'
    },
    {
      title: 'Two-Way Binding',
      category: 'Data Binding',
      description: 'Two-way binding synchronises a component property and an input element.',
      example: '[(ngModel)]="userName"',
      application: 'Demonstrated in the live name preview on this page.',
      level: 'Beginner'
    },
    {
      title: '@Input() and @Output()',
      category: 'Components',
      description: '@Input() passes data from a parent component to a child. @Output() sends events from a child to its parent.',
      example: '@Input() project!: PortfolioProject;\\n@Output() selected = new EventEmitter();',
      application: 'Used by the reusable ProjectCard component.',
      level: 'Intermediate'
    },
    {
      title: 'Structural Directives',
      category: 'Components',
      description: 'Structural directives change the structure of the DOM by adding or removing elements.',
      example: '*ngIf="isVisible"\\n*ngFor="let item of items"',
      application: 'Used to display project cards and conditional content.',
      level: 'Beginner'
    },
    {
      title: 'Attribute Directives',
      category: 'Components',
      description: 'Attribute directives change the appearance or behaviour of existing elements.',
      example: '[ngClass]="{ active: isSelected }"\\n[ngStyle]="styles"',
      application: 'Can be used for active navigation styles and dynamic presentation.',
      level: 'Intermediate'
    },
    {
      title: 'Pipes',
      category: 'Advanced Basics',
      description: 'Pipes transform data for display in templates. Angular provides built-in pipes and supports custom pipes.',
      example: '{{ today | date:"mediumDate" }}\\n{{ name | uppercase }}',
      application: 'Useful for formatting dates, text, and displayed information.',
      level: 'Beginner'
    },
    {
      title: 'Services and Dependency Injection',
      category: 'Advanced Basics',
      description: 'Services contain reusable application logic. Dependency injection provides services to components that need them.',
      example: 'constructor(private portfolioService: PortfolioService) {}',
      application: 'Can centralise project data, theme handling, and shared functionality.',
      level: 'Intermediate'
    },
    {
      title: 'Lifecycle Hooks',
      category: 'Advanced Basics',
      description: 'Lifecycle hooks allow a component to run code at particular stages of its lifecycle.',
      example: 'ngOnInit(): void {\\n  // Initialization logic\\n}',
      application: 'Useful for initializing data and reacting to component changes.',
      level: 'Intermediate'
    },
    {
      title: '@ViewChild()',
      category: 'Advanced Basics',
      description: '@ViewChild() provides access to a child component or an element in the component template.',
      example: '@ViewChild("heading") heading!: ElementRef;',
      application: 'Useful when a component needs to interact with a specific template element.',
      level: 'Intermediate'
    },
    {
      title: 'Content Projection',
      category: 'Advanced Basics',
      description: 'Content projection allows a parent component to insert custom content into a child component using ng-content.',
      example: '<ng-content></ng-content>',
      application: 'Useful for reusable cards, panels, and layout components.',
      level: 'Intermediate'
    }
  ];

  get filteredTopics(): AngularTopic[] {
    if (this.selectedCategory === 'All') {
      return this.topics;
    }

    return this.topics.filter(
      topic => topic.category === this.selectedCategory
    );
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  toggleExplanation(): void {
    this.showExplanation = !this.showExplanation;
  }
}