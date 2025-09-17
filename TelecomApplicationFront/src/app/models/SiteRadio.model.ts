import { Antenne } from "./Antenne.model";
import { Transmission } from "./Transmission.model";

export interface SiteRadio {
  idSiteRadio: number;
  adresse: string;
  cordonnees: string;
  nbrModuleRadio_Logique: number;
  nbrModuleRadio_Physique: number;
  equipement: string;
  categorieSite: 'HDSL' | 'Fisceaux'|'Fibre'|'Autre'; // Replace with your enum values
  technologieSite: 'Tec2G' | 'Tec3G' | 'Tec4G' | 'Tec5G'; // Replace with your enum values
  typeSite: 'Indoor' | 'Outdoor'; // Replace with your enum values
  accesSite: 'Authorisee' | 'NonAuthorisee'; // Replace with your enum values


  antennes: Antenne[];             // Liste d'antennes associées
  transmissions: Transmission[];   // Liste de transmissions associées
}



