import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Livro[] = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Angular para Iniciantes',
      resumo: 'Livro básico de Angular',
      autores: ['Maria Silva', 'João Souza']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'TypeScript Avançado',
      resumo: 'Conceitos intermediários e avançados',
      autores: ['Ana Costa']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Desenvolvimento Web',
      resumo: 'Frontend moderno',
      autores: ['Carlos Pereira']
    }
  ];

  obterLivros(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(l => l.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}
