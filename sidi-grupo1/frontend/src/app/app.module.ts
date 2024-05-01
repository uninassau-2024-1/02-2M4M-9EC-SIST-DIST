import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'; // Importe FormsModule aqui;
import { HttpClientModule } from '@angular/common/http'; // Importe HttpClientModule

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';

@NgModule({
  declarations: [AppComponent, FirstComponentComponent],
  imports: [BrowserModule, FormsModule,  HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
