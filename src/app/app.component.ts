import { ContatosDataBaseService } from './services/contatos-data-base.service';
import { Component } from '@angular/core';

import { ContatoModel } from './models/contato-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Projeto Final - Livro Angular 2';

  contatoclicado: ContatoModel | undefined;

  constructor (private dataBaseService: ContatosDataBaseService) {}

  enviarDetalhe(id: number): void {
    this.contatoclicado = this.dataBaseService.getContato(id);
  }

}
