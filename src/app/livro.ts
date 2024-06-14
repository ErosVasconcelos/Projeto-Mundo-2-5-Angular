export class Livro {
  public codigo: string;
  public codEditora: number;
  public titulo: string;
  public resumo: string;
  public autores: string[];

  constructor() {
      this.codigo = '';
      this.codEditora = 0;
      this.titulo = '';
      this.resumo = '';
      this.autores = [];
  }
}
