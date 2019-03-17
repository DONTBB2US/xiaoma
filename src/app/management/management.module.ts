import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementComponent } from './management.component';
import { HeaderComponent } from './header/header.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ManagementComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ManagementModule { }
