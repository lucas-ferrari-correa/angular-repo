import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { ITransferirReceived } from "../app.component";
import { ITransferir } from "../nova-transferencia/nova-transferencia.component";
import { Transferencia } from "../models/transferencia.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTransferencias: ITransferirReceived[] = [];
  private url = 'http://localhost:3000/transferencias';

  constructor(
    private httpClient: HttpClient
  ) {}

  get transferencias() {
    return this.listaTransferencias;
  }

  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    const transferenciaRecebida = this.hidratar(transferencia);

    return this.httpClient.post<Transferencia>(this.url, transferenciaRecebida);
  }

  hidratar(transferencia: Transferencia): Transferencia {
    const transferenciaRecebida: Transferencia = {
      ...transferencia,
      data: String(new Date()),
    }

    return transferenciaRecebida;
  }
}
