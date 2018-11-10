import { Activite } from "../activite/activite";

export interface Utilisateur {
   id?: number;
   nom: string;
   prenom: string;
   email: string;
   sexe: string;
   activites?: Activite[]; 
}