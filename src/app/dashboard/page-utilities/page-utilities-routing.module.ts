import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OthersComponent } from './others/others.component';

const routes: Routes = [
  { path: '', component: AnimationsComponent },
  { path: 'animations', component: AnimationsComponent },
  { path: 'colors', component: ColorsComponent },
  { path: 'borders', component: BordersComponent },
  { path: 'others', component: OthersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageUtilitiesRoutingModule { }
