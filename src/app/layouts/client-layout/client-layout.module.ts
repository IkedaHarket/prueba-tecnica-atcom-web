import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLayoutRoutingModule } from './client-layout-routing.module';
import { ClientLayoutComponent } from './client-layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ClientLayoutComponent
  ],
  imports: [
    CommonModule,
    ClientLayoutRoutingModule,
    HeaderComponent,
  ]
})
export class ClientLayoutModule { }
