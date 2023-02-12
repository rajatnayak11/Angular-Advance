import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ConvertToDash } from '../shared/convert-to-dash';

console.warn("User Module Loaded")
@NgModule({
  declarations: [
    UserDetailsComponent,
    ConvertToDash
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
