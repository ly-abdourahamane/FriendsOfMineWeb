import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ActiviteComponent } from './activite/activite.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UtilisateurService } from './utilisateur/utilisateur.service';
import { UtilisateurNewComponent } from './utilisateur/utilisateur-new/utilisateur-new.component';

const ROUTES: Routes = [
  {path: 'users', component: UtilisateurComponent},
  {path: 'users/new', component: UtilisateurNewComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'activite', component: ActiviteComponent},
  {path: 'inscription', component: InscriptionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    ActiviteComponent,
    InscriptionComponent,
    UtilisateurNewComponent
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
    MatSelectModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [UtilisateurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
