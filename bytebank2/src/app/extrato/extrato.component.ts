import { Component, Input, OnInit } from '@angular/core';
import { ITransferirReceived } from '../app.component';
import { ITransferir } from '../nova-transferencia/nova-transferencia.component';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  @Input() transferencias: ITransferirReceived[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
