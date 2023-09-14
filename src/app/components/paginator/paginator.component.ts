import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  standalone:true,
  imports:[CommonModule]
})
export class PaginatorComponent {

  @Input('totalPages') totalPages !: number;
  @Input('currentPage') currentPage : number = 1;
  
  @Output() currentPageChange = new EventEmitter<number>(); 

  setPage(page:number){
    this.currentPage = page
    this.currentPageChange.emit(this.currentPage);
  }


}
