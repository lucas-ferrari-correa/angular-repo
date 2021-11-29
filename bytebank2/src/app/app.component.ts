import { Component } from '@angular/core';
import { ITransferir } from './nova-transferencia/nova-transferencia.component';

export interface ITransferirReceived {
  valor: string;
  destino: string;
  data: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank2';

  transferencias: ITransferirReceived[] = [];


  transferir(transferencia: ITransferir) {
    const transferenciaRecebida: ITransferirReceived = {
      ...transferencia,
      data: new Date(),
    }
    this.transferencias.push(transferenciaRecebida);
  }
}
