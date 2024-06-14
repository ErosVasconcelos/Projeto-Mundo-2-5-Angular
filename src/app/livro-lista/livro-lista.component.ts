import { Component, OnInit } from '@angular/core';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  livros: Livro[] = [];
  editoras = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' }
  ];

  constructor(private controleLivrosService: ControleLivrosService) {}

  async ngOnInit() {
    this.livros = await this.controleLivrosService.obterLivros();
  }

  async excluir(codigo: string) {
    await this.controleLivrosService.excluir(codigo);
    this.livros = await this.controleLivrosService.obterLivros();
  }

  obterNome(codEditora: number): string {
    const editora = this.editoras.find(editora => editora.codEditora === codEditora);
    return editora ? editora.nome : 'Desconhecida';
  }
}
