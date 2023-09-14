import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginateMethod,GetClients } from 'src/app/interfaces/services';
import { DataWithStatus } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _clients = new BehaviorSubject<DataWithStatus<GetClients>>({
    hasError: false, isLoaded: false, isLoading: true
  })
  public clients$ = this._clients.asObservable();

  constructor( private readonly _http: HttpClient ) { }

  getClients(paginate: PaginateMethod):Observable<GetClients | null>{
    return this._http.post<GetClients>(`${environment.API_ATCOM}/Client`,paginate,).pipe(
      tap((clients)=> {
        this._clients.next({
          hasError:false, isLoaded:true, isLoading:false, item:clients
        })
      }),
      catchError( (error)=> {
        this._clients.next({
          hasError:true, isLoaded: false,isLoading:false
        })
        return this._handlerError(error)
      })
      )
  }

  getClientsByProcedure(paginate: PaginateMethod):Observable<GetClients | null>{
    return this._http.post<GetClients>(`${environment.API_ATCOM}/Client/By-Procedure`,paginate,).pipe(
      tap((clients)=> {
        this._clients.next({
          hasError:false, isLoaded:true, isLoading:false, item:clients
        })
      }),
      catchError( (error)=> {
        this._clients.next({
          hasError:true, isLoaded: false,isLoading:false
        })
        return this._handlerError(error)
      })
      )
  }

  private _handlerError(error: HttpErrorResponse):Observable<null>{
    return of(null)
  }
}
