import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    TranslateModule
  ],
  declarations: [AboutUsComponent]
})
export class AboutUsModule {
}
