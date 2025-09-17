import { Component, OnInit } from '@angular/core';
import { SiteRadio } from 'src/app/models/SiteRadio.model';
import { GestionsiteradioService } from 'src/app/services/gestionsiteradio.service';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Antenne } from 'src/app/models/Antenne.model';
import { TypeSiteRadio } from 'src/app/models/TypeSiteRadio.model';




@Component({
  selector: 'app-afficher-siteradio',
  templateUrl: './afficher-siteradio.component.html',
  styleUrls: ['./afficher-siteradio.component.scss']
})
export class AfficherSiteradioComponent implements OnInit {
siteradios: SiteRadio[] = [];
showSucessDelete: boolean = false;
selectedSiteRadio: SiteRadio | null = null;
siteRadioDetails:any = {};
typeSiteOptions = Object.values(TypeSiteRadio);
selectedTypeSite: TypeSiteRadio | null = null;
constructor(
  private SiteRadioService: GestionsiteradioService,
  private router: Router,
  private httpClient: HttpClient,
  private modalService: NgbModal,
 
) {}

public backgroundColor: string = '';
ngOnInit(): void {
  this.loadSiteRadios();
}
loadSiteRadios(): void{
this.SiteRadioService.getSiteRadio().subscribe(
  (data:SiteRadio[]) =>{
    this.siteradios=data;
    console.log(this.siteradios);
  },
  (error) =>
  {
    console.log(error);
  }
  
  );
}

naviguerVersAjouter() {
  this.router.navigate(['/component/ajoutersiteradio']);
}
modifierSiteRadio(idSiteRadio: number) {
  this.router.navigate(['/component/modifiersiteradio', idSiteRadio]);
}


 //suppimer siteradio
 deleteSiteRadio(idSiteRadio: number) {
  this.httpClient
    .delete(
      `http://localhost:8081/telecomapplication/siteradio/deleteSiteRadio/${idSiteRadio}`
    )
    .subscribe(
      () => {
        // Gérer la suppression réussie
        console.log("Siteradio supprimé avec succès.");
        this.showSucessDelete = true;
        setTimeout(() => {
          this.showSucessDelete = false;
          this.modalService.dismissAll();
          this.loadSiteRadios();
        }, 2000);

      },
      (error: any) => {
        console.error("Erreur lors de la suppression du siteradio:", error);
      }
    );
}
// modal Open Danger
modalOpenDanger(Siteradio: SiteRadio, modalDanger: any) {
  this.selectedSiteRadio = Siteradio;
  this.modalService.open(modalDanger, {
    centered: true,
    windowClass: 'modal modal-danger',
  });
}

deleteSelectedSiteradio() {
  if (this.selectedSiteRadio) {
    this.deleteSiteRadio(this.selectedSiteRadio.idSiteRadio);
  }
}

loadSiteRadioDetails(idAntenne: number): void {
  this.SiteRadioService.getSiteRadioById(idAntenne).subscribe(
    () => {
      this.router.navigate(["/component/detailsSiteRadio", idAntenne]);
    },
    (error) => {
      console.log(error);
    }
  );
}
loadSiteRadioDetailsT(idTransmission: number): void {
  this.SiteRadioService.getSiteRadioById(idTransmission).subscribe(
    () => {
      this.router.navigate(["/component/detailsSiteRadioT", idTransmission]);
    },
    (error) => {
      console.log(error);
    }
  );
}

searchSiteRadios(): void {
  if (this.selectedTypeSite) {
    this.SiteRadioService.searchSiteRadio(this.selectedTypeSite).subscribe(
      (data: SiteRadio[]) => {
        this.siteradios = data;
      },
      (error) => {
        console.error('Erreur lors de la recherche:', error);
      }
    );
  } else {
    this.loadSiteRadios();
  }
}

exporterSiteRadioPDF() {
  this.SiteRadioService.exportSiteRadioData().subscribe((data: Blob) => {
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'site-radio-report.pdf'; // Nom du fichier de téléchargement
    a.click();
    window.URL.revokeObjectURL(url);
  });
}

}

