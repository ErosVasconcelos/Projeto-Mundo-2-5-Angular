import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  livro: Livro = new Livro();
  editoras = [
    { codEditora: 1, nome: 'Editora A' },
    { codEditora: 2, nome: 'Editora B' }
  ];
  autoresForm: string = '';

  constructor(
    private controleLivrosService: ControleLivrosService,
    private router: Router
  ) {}

  async ngOnInit() {
    // Inicializações adicionais, se necessário
  }

  async incluir() {
    this.livro.autores = this.autoresForm.split(',').map(autor => autor.trim());
    await this.controleLivrosService.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  }
}
