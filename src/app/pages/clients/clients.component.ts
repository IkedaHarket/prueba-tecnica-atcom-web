import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services';

enum EndpointType{
  QUERY = "query",
  PROCEDURE = "procedure",
}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  constructor( private readonly _client: ClientService ){ }
  
  public clients = this._client.clients$;

  public currentPage: number = 1;

  endpoints: any[] = [{label: 'Query', value: EndpointType.QUERY}, {label: 'Procedure', value: EndpointType.PROCEDURE}];
  endpointSelected: string = EndpointType.QUERY;

  ngOnInit(): void {
    this.pageChange(1)
  }

  pageChange(page:number ){
    this.currentPage = page;
    if(this.endpointSelected === EndpointType.QUERY)
      this._client.getClients({page, limit:10}).subscribe()
    else 
      this._client.getClientsByProcedure({page, limit:10}).subscribe()
  }

}
