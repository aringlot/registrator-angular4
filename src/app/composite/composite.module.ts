import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompositeRoutingModule } from './composite-routing.module';
import { ContainerComponent } from './container/container.component';
import { ContainerItemComponent } from './container-item/container-item.component';

@NgModule({
  imports: [
    CommonModule,
    CompositeRoutingModule
  ],
  declarations: [ContainerComponent, ContainerItemComponent]
})
export class CompositeModule { }
