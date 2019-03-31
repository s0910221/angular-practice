import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorsComponent } from './colors/colors.component';
import { BordersComponent } from './borders/borders.component';
import { AnimationsComponent } from './animations/animations.component';
import { OtherComponent } from './other/other.component';

import { UtilitiesRoutingModule } from './utilities-routing.module';

@NgModule({
  declarations: [
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent
  ],
  imports: [
    CommonModule,
    UtilitiesRoutingModule
  ]
})
export class UtilitiesModule { }
