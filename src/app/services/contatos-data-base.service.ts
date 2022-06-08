import { EventEmitter, Injectable } from '@angular/core';


import { ContatoModel } from './../models/contato-model';

@Injectable({
  providedIn: 'root'
})

export class ContatosDataBaseService {

  meusContatos: ContatoModel[] = [];
  enviarContatos = new EventEmitter();

  constructor() { }

  setContato(novoContato: ContatoModel): void {
    this.meusContatos.push(novoContato);
    this.enviarContatos.emit(this.meusContatos);
  }

  getContato(id: number): ContatoModel {
    let contato: ContatoModel;
    contato = this.meusContatos[id];

    return contato;
  }
}
