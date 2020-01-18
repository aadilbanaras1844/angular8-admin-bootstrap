import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageComponentsRoutingModule } from './page-components-routing.module';
import { PageComponentsComponent } from './page-components.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [PageComponentsComponent, ButtonsComponent, CardsComponent],
  imports: [
    CommonModule,
    PageComponentsRoutingModule
  ]
})
export class PageComponentsModule { }
