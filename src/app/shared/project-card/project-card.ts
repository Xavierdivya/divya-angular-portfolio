import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface PortfolioProject {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string | null;
  featured: boolean;
}

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {
  @Input() project!: PortfolioProject;

  @Output() projectSelected = new EventEmitter<PortfolioProject>();

  viewDetails(): void {
    this.projectSelected.emit(this.project);
  }
}