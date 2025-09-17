import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Derangement } from 'src/app/models/Derangement.model';
import { GestionderangementService } from 'src/app/services/gestionderangement.service';

@Component({
  selector: 'app-ajouter-derangement',
  templateUrl: './ajouter-derangement.component.html',
  styleUrls: ['./ajouter-derangement.component.scss']
})
export class AjouterDerangementComponent {
  derangement: Derangement = {
    dateDerangement: new Date(), // Valeur par défaut, pourra être modifiée par l'utilisateur
    probAcces: 0,
    action: '',
    typeDerangement: 'Transmission', // Valeur par défaut
    idSiteRadio: 0 // Valeur par défaut
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private derangementService: GestionderangementService) { }

  onSubmit(): void {
    this.derangementService.createDerangement(this.derangement, this.derangement.idSiteRadio).subscribe({
      next: (response) => {
        this.successMessage = 'Dérangement créé avec succès';
        this.errorMessage = '';
        console.log('Success:', response);
      },
      error: (error) => {
        this.successMessage = '';
        this.errorMessage = 'Erreur lors de la création du dérangement';
        console.error('Error:', error);
      }
    });
  }
}

