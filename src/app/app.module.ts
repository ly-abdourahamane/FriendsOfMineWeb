import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ActiviteComponent } from './activite/activite.component';

const ROUTES: Routes = [
  // {path: 'home', component: AppComponent},
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    ActiviteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 

    [RouterModule.forRoot(ROUTES)],

    //MATERIAL
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
