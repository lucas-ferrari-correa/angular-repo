import { Component } from '@angular/core';
import { Transferencia } from './models/transferencia.model';
import { ITransferir } from './nova-transferencia/nova-transferencia.component';
import { TransferenciaService } from './services/transferencia.service';

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

  constructor(
    private service: TransferenciaService
  ) {}
}
