import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-form-dbz',
  templateUrl: './form-dbz.component.html'

})
export class FormDbzComponent {
  

  
  
  @Input ('nuevo')nuevo: Personaje={
    nombre:'',
    poder:0
  }
  constructor(private dbzService:DbzService){

  }
  
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  agregar( ){
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    console.log(this.nuevo)
    this.dbzService.agregarPersonaje(this.nuevo)
    //this.onNuevoPersonaje.emit(this.nuevo)
   this.nuevo={
    nombre:'',
    poder:0
   }
   
  }
}
