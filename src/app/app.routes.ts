import { Routes } from '@angular/router';
import { IntroComponent } from './pages/intro/intro';
import { WorkComponent } from './pages/work/work';
import { QuantComponent } from './pages/quant/quant';

export const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'work', component: WorkComponent },
  { path: 'quant', component: QuantComponent },

  // The Default Route (must be last)
  // When path is empty (just the domain name)
  // redirectTo /intro
  { path: '', redirectTo: 'intro', pathMatch: 'full' },

];
