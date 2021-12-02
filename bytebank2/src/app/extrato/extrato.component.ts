import { Component, Input, OnInit } from '@angular/core';
import { ITransferirReceived } from '../app.component';
import { Transferencia } from '../models/transferencia.model';
import { ITransferir } from '../nova-transferencia/nova-transferencia.component';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[] = [];

  constructor(
    private service: TransferenciaService
  ) {}

  ngOnInit(): void {
    this.service.todas().subscribe((transferencias: Transferencia[]) => {
      console.table(transferencias);
      this.transferencias = transferencias;
    })
  }

}
