import { SiteRadio } from "./SiteRadio.model";
import { SiteRadioDto } from "./SiteRadioDto.model";

export interface Derangement {
    idDerangement?: number;
    dateDerangement: Date;
    probAcces: number;
    action: string;
    typeDerangement: 'Transmission' | 'Environnement' | 'Hard' | 'Soft' | 'Energie' | 'Qualité' | 'Autre';
    idSiteRadio: number;
  }
