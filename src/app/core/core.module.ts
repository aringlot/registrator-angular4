import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerService } from './services/spinner.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [
    SpinnerComponent,
    HeaderComponent],
  providers: [SpinnerService],
  exports: [
    SpinnerComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
