
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Projects } from './pages/projects/projects';
import { Achievements } from './pages/achievements/achievements';
import { AngularLearning } from './pages/angular-learning/angular-learning';
import { Contact } from './pages/contact/contact';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'achievements', component: Achievements },
  { path: 'angular-learning', component: AngularLearning },
  { path: 'contact', component: Contact },

  // Redirect unknown URLs to Home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
