import { Utilisateur } from "../utilisateur/utilisateur";

export interface Activite {
    id?: number;
    titre: string;
    description: string;
    utilisateur: Utilisateur;
}