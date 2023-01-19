import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
 
})
export class MainPageComponent {

  // get personajes():Personaje[]{
  //   return this.dbzService.personajes
  // }
  nuevo: Personaje={
       nombre:'Maestro Roshi',
       poder:1100
     }
  // nuevo: Personaje={
  //   nombre:'',
  //   poder:0
  // }
  // cambiarNombre(event:any){
  //   console.log(event.target.value)
  // }
  // agregar( ){
  //   if(this.nuevo.nombre.trim().length===0){
  //     return;
  //   }
  //  this.personajes.push(this.nuevo)
  //  this.nuevo={
  //   nombre:'',
  //   poder:0
  //  }
  // }
  agregarNuevoPersonaje(argumento:Personaje){
    
    //this.personajes.push(argumento)
    
  }

  constructor(private dbzService: DbzService){
    //this.personajes = this.dbzService.personajes
  }
}
