import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  
  numero:number=0;

  suma():void{
    ++this.numero;
  }
  resta():void{
    --this.numero
  }


}
