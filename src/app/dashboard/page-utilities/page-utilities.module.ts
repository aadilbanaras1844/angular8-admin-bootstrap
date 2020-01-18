import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageUtilitiesRoutingModule } from './page-utilities-routing.module';
import { PageUtilitiesComponent } from './page-utilities.component';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OthersComponent } from './others/others.component';


@NgModule({
  declarations: [PageUtilitiesComponent, ColorsComponent, BordersComponent, AnimationsComponent, OthersComponent],
  imports: [
    CommonModule,
    PageUtilitiesRoutingModule
  ]
})
export class PageUtilitiesModule { }
