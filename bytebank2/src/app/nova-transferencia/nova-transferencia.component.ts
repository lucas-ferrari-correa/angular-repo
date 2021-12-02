import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Transferencia } from "../models/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

export interface ITransferir {
  valor: string;
  destino: string;
}

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir: EventEmitter<Transferencia> = new EventEmitter();

  valor: string = '';
  destino: string = '';

  constructor(
    private service: TransferenciaService
  ) {}

  transferir() {
    console.log('Solicitada nova transferência');

    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino
    }

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limparCampos();
    },
    (error) => console.error(error));

    this.aoTransferir.emit(valorEmitir)
  }

  limparCampos() {
    this.valor = '';
    this.destino = '';
  }
}
