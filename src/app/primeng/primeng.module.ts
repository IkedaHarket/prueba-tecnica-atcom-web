import { NgModule } from '@angular/core';
import { TableModule } from 'primeng/table';
import { SelectButtonModule } from 'primeng/selectbutton';



@NgModule({
  exports:[
    TableModule,
    SelectButtonModule
  ]
})
export class PrimengModule { }
