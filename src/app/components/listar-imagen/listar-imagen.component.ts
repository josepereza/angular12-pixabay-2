import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent implements OnInit {
termino='';
subscription! :Subscription;
imagenes:any[]=[];
loading:boolean=false;
p: number = 1;
  constructor(private imagenService:ImagenService) { 
   
  }

  ngOnInit(): void {
    this.subscription=this.imagenService.getTerminoBusqueda().subscribe(data=>{
     this.termino=data;
     this.obternerImagenes();
     })
    
  }
obternerImagenes(){
  this.loading=true
  this.imagenService.getImagenes(this.termino).subscribe((data:any)=>{
   if (data.hits.length === 0){
     this.imagenService.setError('No se encontraron imagenes');
     return
   }
   this.imagenes=data.hits;
   this.loading=false;
  },error=>{
    this.imagenService.setError('Hubo un problema');

  })
}
}
