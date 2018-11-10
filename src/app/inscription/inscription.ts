import { Activite } from "../activite/activite";
import { Utilisateur } from "../utilisateur/utilisateur";

export interface Inscription {
    id?: number;
    activite: Activite;
    utilisateur: Utilisateur;
    dateInscription?: Date
}