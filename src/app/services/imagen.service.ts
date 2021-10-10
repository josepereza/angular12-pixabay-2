import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {
private $error=new Subject<string>();
private $terminoBusqueda= new Subject<string>();
  constructor(private http:HttpClient) { }

  setError(mensaje:string){
    this.$error.next(mensaje)
  }
  getError():Observable<string>{
    return this.$error.asObservable();

  }
  enviarTerminoBusqueda(termino:string){
    this.$terminoBusqueda.next(termino);

  }
  getTerminoBusqueda():Observable<string>{
    return this.$terminoBusqueda.asObservable();
  }
  getImagenes(termino:string){
    const KEY='18996185-18a0581f6f1b6c1f4296053ed';
    const URL='https://pixabay.com/api/?key=18996185-18a0581f6f1b6c1f4296053ed'+'&q='+termino;
    return this.http.get(URL);
  }
}
