import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ContatosDataBaseService } from './../services/contatos-data-base.service';
import { ContatoModel } from './../models/contato-model';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaDeContatos: ContatoModel[] = [];
  @Output() idClicado = new EventEmitter();

  constructor(private dataBaseService: ContatosDataBaseService) { }

  ngOnInit(): void {
    this.dataBaseService.enviarContatos.subscribe(contatos => this.listaDeContatos = contatos);
  }

  contatoClicado(item: number) {
    this.idClicado.emit(item);
  }

}
