import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Adicionado
import { AppRoutingModule } from './app-routing.module'; // ou similar
import { AppComponent } from './app.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';
import { ControleLivrosService } from './controle-livros.service';

@NgModule({
  declarations: [
    AppComponent,
    LivroListaComponent,
    LivroDadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicionado
    AppRoutingModule // ou similar
  ],
  providers: [ControleLivrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
