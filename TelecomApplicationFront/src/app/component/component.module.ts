import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "./table/table.component";
import { AfficherSiteradioComponent } from './afficher-siteradio/afficher-siteradio.component';
import { ModifierSiteradioComponent } from './modifier-siteradio/modifier-siteradio.component';
import { AjouterSiteradioComponent } from './ajouter-siteradio/ajouter-siteradio.component';
import { AfficherDerangementComponent } from './afficher-derangement/afficher-derangement.component';
import { ModifierDerangementComponent } from './modifier-derangement/modifier-derangement.component';
import { AjouterDerangementComponent } from './ajouter-derangement/ajouter-derangement.component';
import { DetailsSiteradioComponent } from './details-siteradio/details-siteradio.component';
import { DetailsSiteradioTComponent } from './details-siteradio-t/details-siteradio-t.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    NgbdButtonsComponent,
    CardsComponent,
    TableComponent,

    
  ],
  declarations: [
    AfficherSiteradioComponent,
    ModifierSiteradioComponent,
    AjouterSiteradioComponent,
    AfficherDerangementComponent,
    ModifierDerangementComponent,
    AjouterDerangementComponent,
    DetailsSiteradioComponent,
    DetailsSiteradioTComponent,
    
  ],
})
export class ComponentsModule { }
