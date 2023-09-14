import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';
import { PhoneNumberPipe } from 'src/app/pipes';


@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    PrimengModule,
    PaginatorComponent,
    PhoneNumberPipe,
    FormsModule
  ]
})
export class ClientsModule { }
