import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-new',
  templateUrl: './utilisateur-new.component.html',
  styleUrls: ['./utilisateur-new.component.css']
})
export class UtilisateurNewComponent implements OnInit {

  utilisateur: Utilisateur =  { nom: "", prenom: "", email: "", sexe: ""};

  constructor(private utilisateurService: UtilisateurService) { }

  ngOnInit() {
  }

  createUtilisateur() {
    this.utilisateurService.addUtilisateur(this.utilisateur).subscribe((res: Utilisateur) => {
     
    });
  }
}
