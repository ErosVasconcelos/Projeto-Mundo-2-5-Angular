import { Injectable } from '@angular/core';
import { Livro } from './livro';

const baseURL = 'http://localhost:3030/livros';

export interface LivroMongo {
  _id: string;
  codigo: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  
  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL);
    const data = await response.json();
    return data.map((item: LivroMongo) => ({
      codigo: item.codigo,
      codEditora: item.codEditora,
      titulo: item.titulo,
      resumo: item.resumo,
      autores: item.autores,
    }));
  }

  async excluir(codigo: string): Promise<boolean> {
    const response = await fetch(`${baseURL}/${codigo}`, {
      method: 'DELETE',
    });
    return response.ok;
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: '', // assumindo que _id será gerado pelo servidor
      codigo: livro.codigo,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(livroMongo),
    });
    return response.ok;
  }
}
