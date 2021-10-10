import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit,OnDestroy {
mensaje:string='';
mostrar:boolean=false;
  constructor(private imagenService:ImagenService) { }

  ngOnInit(): void {
    this.imagenService.getError().subscribe(data=>{
     this.mostrarMensaje();
this.mensaje=data

    })
  }
borrar(){
  this.mostrar=false;
}
ngOnDestroy():void {

}
mostrarMensaje(){
  this.mostrar=true;
  setTimeout(()=>{
    this.mostrar=false;
  },2000)
}
}
