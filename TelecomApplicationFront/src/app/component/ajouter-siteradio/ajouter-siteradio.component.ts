import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SiteRadio } from 'src/app/models/SiteRadio.model';
import { Antenne } from 'src/app/models/Antenne.model';
import { Transmission } from 'src/app/models/Transmission.model';
import { GestionsiteradioService } from 'src/app/services/gestionsiteradio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-siteradio',
  templateUrl: './ajouter-siteradio.component.html',
  styleUrls: ['./ajouter-siteradio.component.scss']
})
export class AjouterSiteradioComponent implements OnInit {
  siteRadioForm: FormGroup;
  showAlert: boolean = false;

  constructor(
    private fb: FormBuilder,
    private siteradioService: GestionsiteradioService,
    private router: Router
  ) {
    this.siteRadioForm = this.fb.group({
      adresse: ['', Validators.required],
      cordonnees: ['', Validators.required],
      nbrModuleRadio_Logique: [0, Validators.required],
      nbrModuleRadio_Physique: [0, Validators.required],
      equipement: [0, Validators.required],
      categorieSite: ['HDSL', Validators.required],
      technologieSite: ['Tec2G', Validators.required],
      typeSite: ['Indoor', Validators.required],
      accesSite: ['Authorisee', Validators.required],
      antennes: this.fb.array([]),
      transmissions: this.fb.array([])
    });
  }

  ngOnInit(): void {}

  get antennes(): FormArray {
    return this.siteRadioForm.get('antennes') as FormArray;
  }

  get transmissions(): FormArray {
    return this.siteRadioForm.get('transmissions') as FormArray;
  }

  ajouterAntenne() {
    const antenneGroup = this.fb.group({
      nbrAntenne: [0, Validators.required],
      positionAntenne: ['TILT', Validators.required],
      typeFournisseur: ['KATHREIN', Validators.required]
    });
    this.antennes.push(antenneGroup);
  }

  ajouterTransmission() {
    const transmissionGroup = this.fb.group({
      path: [0, Validators.required],
      categorieSupport: ['HDSL', Validators.required]
    });
    this.transmissions.push(transmissionGroup);
  }
  saveSiteRadio() {
    if (this.siteRadioForm.invalid) {
      return;
    }

    const siteRadio: SiteRadio = this.siteRadioForm.value;
    
    this.siteradioService.CreateSiteRadio(siteRadio).subscribe(
      (response) => {
        console.log('SiteRadio créé avec succès', response);
        this.showAlert = true; // Show the success alert

        // Hide the alert after 3 seconds (3000 ms)
        setTimeout(() => {
          this.showAlert = false;
          this.router.navigate(['/component/affichersiteradio']);
        }, 3000);
      },
      (error) => {
        console.error('Error creating SiteRadio', error);
      }
    );
  }
}
