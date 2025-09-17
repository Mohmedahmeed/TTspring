import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SiteRadio } from 'src/app/models/SiteRadio.model';
import { GestionsiteradioService } from 'src/app/services/gestionsiteradio.service';

@Component({
  selector: 'app-details-siteradio-t',
  templateUrl: './details-siteradio-t.component.html',
  styleUrls: ['./details-siteradio-t.component.scss']
})
export class DetailsSiteradioTComponent implements OnInit {
  siteradioDetails: SiteRadio | null = null; 
  idTransmission?:number;
  constructor(
    private route: ActivatedRoute,
    private gestionSiteRadioService: GestionsiteradioService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idTransmission = +params['idTransmission']; 
    
      if (this.idTransmission) {
        this.gestionSiteRadioService.getSiteRadioForTransmission(this.idTransmission).subscribe(
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
