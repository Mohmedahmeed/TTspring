import { Component } from '@angular/core';
import { Derangement } from 'src/app/models/Derangement.model';
import { GestionderangementService } from 'src/app/services/gestionderangement.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-afficher-derangement',
  templateUrl: './afficher-derangement.component.html',
  styleUrls: ['./afficher-derangement.component.scss']
})
export class AfficherDerangementComponent {
  derangements: Derangement[] = [];

  constructor(private derangementService: GestionderangementService,private router:Router) { }

  ngOnInit(): void {
    this.loadDerangements();
  }

  loadDerangements(): void {
    this.derangementService.getAllDerangements().subscribe({
      next: (data) => {
        this.derangements = data;
      },
      error: (error) => {
        console.error('Error fetching derangements:', error);
      }
    });
  }

  modifierDerangement(idDerangement?: number): void {
    if (idDerangement !== undefined) {
      this.router.navigate(['/component/modifierderangement', idDerangement]);
    } else {
      console.error("idDerangement est indéfini");
    }
  }
  
  
}

