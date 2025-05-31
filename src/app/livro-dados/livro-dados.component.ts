import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora';
import { ControleLivrosService } from '../controle-livros';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  public livro: Livro = {
    codigo: 0,
    codEditora: 0,
    titulo: '',
    resumo: '',
    autores: []
  };

  public autoresForm: string = '';
  public editoras: Editora[] = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livro.codEditora = this.editoras[0]?.codEditora ?? 0;
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm.split('\n').map(a => a.trim());
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  };
}

