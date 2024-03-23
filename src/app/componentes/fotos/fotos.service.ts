import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fotos } from '../../model/fotos.model'

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private http:HttpClient){ }

  public getFotos(): Observable<Fotos> {
    return this.http.get('https://jsonplaceholder.typicode.com/photos/');

  }
}
