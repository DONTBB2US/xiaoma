import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { MaterialComponentsModule } from './material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MaterialComponentsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    MaterialComponentsModule,
    
  ]
})
export class SharedModule { }
