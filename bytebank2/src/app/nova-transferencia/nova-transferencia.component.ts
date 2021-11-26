import { Component, EventEmitter, Input, Output } from "@angular/core";

export interface ITransferir {
  valor: number;
  destino: number;
}

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir: EventEmitter<ITransferir> = new EventEmitter();

  valor: number = 12;
  destino: number = 222;

  transferir() {
    console.log('Solicitada nova transferência');
    this.aoTransferir.emit({
      valor: this.valor,
      destino: this.destino
    })
  }
}
