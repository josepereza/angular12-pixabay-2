import { Component, Input, OnInit } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@Input() titulo=''
nombreImagen:string;
  constructor(private imagenService:ImagenService) {
    this.nombreImagen='';
   }

  ngOnInit(): void {
  }
buscarImagenes(){
console.log(this.nombreImagen)
if (this.nombreImagen==''){
  this.imagenService.setError('No puede enviar texto en blanco');
  return
}
this.imagenService.enviarTerminoBusqueda(this.nombreImagen)
}
}
