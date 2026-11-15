
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Projects } from './pages/projects/projects';
import { Achievements } from './pages/achievements/achievements';
import { AngularLearning } from './pages/angular-learning/angular-learning';
import { Contact } from './pages/contact/contact';

import { ProjectCard } from './shared/project-card/project-card';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,

    Home,
    About,
    Experience,
    Projects,
    Achievements,
    AngularLearning,
    Contact,

    ProjectCard
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule {}
