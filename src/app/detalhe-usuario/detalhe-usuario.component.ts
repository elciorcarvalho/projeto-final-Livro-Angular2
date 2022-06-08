import { Component, Input, OnInit } from '@angular/core';
import { ContatoModel } from './../models/contato-model';

@Component({
  selector: 'app-detalhe-usuario',
  templateUrl: './detalhe-usuario.component.html',
  styleUrls: ['./detalhe-usuario.component.css']
})
export class DetalheUsuarioComponent implements OnInit {

  @Input() contato: ContatoModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
