import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  
  //@Input() personajes: Personaje[]=[]//vendran desde el componente padre
  get personajes(){
    return this.dbzService.personajes
  }
  constructor(private dbzService: DbzService){

  }
}
