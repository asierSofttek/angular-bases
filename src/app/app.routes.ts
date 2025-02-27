import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragoballPageComponent } from './pages/dragoball/dragoball-page.component';
import { DragoballSuperPageComponent } from './pages/dragoball-super/dragoball-super-page.component';


export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent
  },
  {
    path: 'hero',
    component: HeroPageComponent
  },
  {
    path: 'dragonball',
    component: DragoballPageComponent
  },
  {
    path: 'dragonball-super',
    component: DragoballSuperPageComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
