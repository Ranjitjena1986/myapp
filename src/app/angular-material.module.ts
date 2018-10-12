import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
 
@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AngularMaterialModule { }
