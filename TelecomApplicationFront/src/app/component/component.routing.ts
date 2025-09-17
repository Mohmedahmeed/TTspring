import { Routes } from '@angular/router';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { BadgeComponent } from './badge/badge.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { AfficherSiteradioComponent } from './afficher-siteradio/afficher-siteradio.component';
import { ModifierSiteradioComponent } from './modifier-siteradio/modifier-siteradio.component';
import { AjouterSiteradioComponent } from './ajouter-siteradio/ajouter-siteradio.component';
import { AfficherDerangementComponent } from './afficher-derangement/afficher-derangement.component';
import { ModifierDerangementComponent } from './modifier-derangement/modifier-derangement.component';
import { AjouterDerangementComponent } from './ajouter-derangement/ajouter-derangement.component';
import { DetailsSiteradioComponent } from './details-siteradio/details-siteradio.component';
import { DetailsSiteradioTComponent } from './details-siteradio-t/details-siteradio-t.component';


export const ComponentsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'table',
                component: TableComponent
            },
            {
                path: 'card',
                component: CardsComponent
            },
            {
                path: 'pagination',
                component: NgbdpaginationBasicComponent
            },
            {
                path: 'badges',
                component: BadgeComponent
            },
            {
                path: 'alert',
                component: NgbdAlertBasicComponent
            },
            {
                path: 'dropdown',
                component: NgbdDropdownBasicComponent
            },
            {
                path: 'nav',
                component: NgbdnavBasicComponent
            },
            {
                path: 'buttons',
                component: NgbdButtonsComponent
            },
            {
                path: 'affichersiteradio',
                component: AfficherSiteradioComponent
            },
            {
                path: 'modifiersiteradio/:id',
                component: ModifierSiteradioComponent
            },
            {
                path: 'ajoutersiteradio',
                component: AjouterSiteradioComponent
            },
            {
                path: 'afficherderangement',
                component: AfficherDerangementComponent
            },
            {
                path: 'modifierderangement/:id',
                component: ModifierDerangementComponent
            },
            {
                path: 'ajouterderangement',
                component: AjouterDerangementComponent
            },
            {
                path: 'detailsSiteRadio/:idAntenne',
                component: DetailsSiteradioComponent
            },
            {
                path: 'detailsSiteRadioT/:idTransmission',
                component: DetailsSiteradioTComponent
            },
         
            {
                path: '**',
                redirectTo: 'affichersiteradio' // Redirige vers une route valide par défaut
            },
            { path: '**', redirectTo: '/starter' }
        ]
    }
];
