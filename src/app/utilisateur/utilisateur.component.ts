import { Component, OnInit } from '@angular/core';
import { Utilisateur } from './utilisateur';
import { UtilisateurService } from './utilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  utilisateurs: Utilisateur[] = [];

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
    this.utilisateurService.getUtilisateurs().subscribe((utilisateurs: Utilisateur[]) => {
      this.utilisateurs = utilisateurs;
      console.log(this.utilisateurs);
    })
  }



}
