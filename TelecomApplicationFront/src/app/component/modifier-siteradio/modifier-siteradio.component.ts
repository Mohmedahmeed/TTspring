import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Antenne } from 'src/app/models/Antenne.model';
import { Transmission } from 'src/app/models/Transmission.model';
import { GestionsiteradioService } from 'src/app/services/gestionsiteradio.service';

@Component({
  selector: 'app-modifier-siteradio',
  templateUrl: './modifier-siteradio.component.html',
  styleUrls: ['./modifier-siteradio.component.scss']
})
export class ModifierSiteradioComponent implements OnInit {
  siteRadioForm!: FormGroup;
  idSiteRadio!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private siteRadioService: GestionsiteradioService
  ) {}

  ngOnInit(): void {
    this.idSiteRadio = this.route.snapshot.params['id'];
    this.initForm();
    this.loadSiteRadio();
  }

  private initForm(): void {
    this.siteRadioForm = this.fb.group({
      adresse: ['', Validators.required],
      cordonnees: ['', Validators.required],
      nbrModuleRadio_Logique: [0, Validators.required],
      nbrModuleRadio_Physique: [0, Validators.required],
      equipement: [0, Validators.required],
      categorieSite: ['', Validators.required],
      technologieSite: ['', Validators.required],
      typeSite: ['', Validators.required],
      accesSite: ['', Validators.required],
      antennes: this.fb.array([]),
      transmissions: this.fb.array([])
    });
  }

  private loadSiteRadio(): void {
    this.siteRadioService.getSiteRadioById(this.idSiteRadio).subscribe(
      (data) => {
        this.siteRadioForm.patchValue({
          adresse: data.adresse,
          cordonnees: data.cordonnees,
          nbrModuleRadio_Logique: data.nbrModuleRadio_Logique,
          nbrModuleRadio_Physique: data.nbrModuleRadio_Physique,
          equipement: data.equipement,
          categorieSite: data.categorieSite,
          technologieSite: data.technologieSite,
          typeSite: data.typeSite,
          accesSite: data.accesSite
        });
        this.setAntennes(data.antennes);
        this.setTransmissions(data.transmissions);
      },
      (error) => {
        console.error('Erreur lors de la récupération du SiteRadio', error);

      }
    );
  }

  // Gestion des antennes
  get antennes(): FormArray {
    return this.siteRadioForm.get('antennes') as FormArray;
  }

  addAntenne(): void {
    this.antennes.push(this.fb.group({
      idAntenne: [null],
      nbrAntenne: [0, Validators.required],
      positionAntenne: ['', Validators.required],
      typeFournisseur: ['', Validators.required]
    }));
  }

  removeAntenne(index: number): void {
    this.antennes.removeAt(index);
  }

  setAntennes(antennes: any[]): void {
    const antenneFGs = antennes.map(a => this.fb.group({
      idAntenne: [a.idAntenne],
      nbrAntenne: [a.nbrAntenne, Validators.required],
      positionAntenne: [a.positionAntenne, Validators.required],
      typeFournisseur: [a.typeFournisseur, Validators.required]
    }));
    const antenneFormArray = this.fb.array(antenneFGs);
    this.siteRadioForm.setControl('antennes', antenneFormArray);
  }

  // Gestion des transmissions
  get transmissions(): FormArray {
    return this.siteRadioForm.get('transmissions') as FormArray;
  }

  addTransmission(): void {
    this.transmissions.push(this.fb.group({
      idTransmission: [null],
      path: [0, Validators.required],
      categorieSupport: ['', Validators.required]
  }));
  }

  removeTransmission(index: number): void {
    this.transmissions.removeAt(index);
  }

  setTransmissions(transmissions: any[]): void {
    const transmissionFGs = transmissions.map(t => this.fb.group({
      idTransmission: [t.idTransmission],
      path: [t.path, Validators.required],
      categorieSupport: [t.categorieSupport, Validators.required]
    }));
    const transmissionFormArray = this.fb.array(transmissionFGs);
    this.siteRadioForm.setControl('transmissions', transmissionFormArray);
  }

  onSubmit(): void {
    if (this.siteRadioForm.invalid) {
      return;
    }

    this.siteRadioService.updateSiteRadio(this.idSiteRadio, this.siteRadioForm.value).subscribe(
      (response) => {
        console.log('SiteRadio mis à jour avec succès', response);
        this.router.navigate(['/component/affichersiteradio']);
      },
      (error) => {
        console.error('Erreur lors de la mise à jour du SiteRadio', error);
      }
    );
  }
}