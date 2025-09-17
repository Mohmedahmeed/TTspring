import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteRadio } from 'src/app/models/SiteRadio.model';
import { GestionsiteradioService } from 'src/app/services/gestionsiteradio.service';

@Component({
  selector: 'app-details-siteradio',
  templateUrl: './details-siteradio.component.html',
  styleUrls: ['./details-siteradio.component.scss']
})
export class DetailsSiteradioComponent implements OnInit {
  siteradioDetails: SiteRadio | null = null; 
  idAntenne?: number;

  constructor(
    private route: ActivatedRoute,
    private gestionSiteRadioService: GestionsiteradioService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idAntenne = +params['idAntenne']; 
      console.log('ID Antenne:', this.idAntenne);

      if (this.idAntenne) {
        this.gestionSiteRadioService.getSiteRadioForAntenne(this.idAntenne).subscribe(
          (data: SiteRadio) => {
            this.siteradioDetails = data; 
            console.log('SiteRadio Details:', this.siteradioDetails);
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }
}


