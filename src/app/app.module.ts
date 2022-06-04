import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuComponentComponent } from './meu-component/meu-component.component';
import { NavBarComponentComponent } from './nav-bar-component/nav-bar-component.component';
import { TblComponent } from './tbl/tbl.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuComponentComponent,
    NavBarComponentComponent,
    TblComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
