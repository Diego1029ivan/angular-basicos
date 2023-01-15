import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes:string[]=['Spiderman','Ironman','Hulk','Superman','Thor'];
  heroeBorrado:string='';
  
  borrarHeroe():void{
    const heroesBorrado=this.heroes.shift() || '';
    this.heroeBorrado=heroesBorrado
  }
}
