import { Component } from '@angular/core';
import { ITransferir } from './nova-transferencia/nova-transferencia.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank2';

  valor: number = 0;
  destino: number = 0;

  transferir(transferencia: ITransferir) {
    this.valor = transferencia.valor;
    this.destino = transferencia.destino;
  }
}
