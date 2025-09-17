import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Derangement } from 'src/app/models/Derangement.model';
import { GestionderangementService } from 'src/app/services/gestionderangement.service';


@Component({
  selector: 'app-modifier-derangement',
  templateUrl: './modifier-derangement.component.html',
  styleUrls: ['./modifier-derangement.component.scss']
})
export class ModifierDerangementComponent implements OnInit {
  derangement: Derangement | null = null;
  idDerangement!: number;

  constructor(
    private route: ActivatedRoute,
    private derangementService: GestionderangementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.idDerangement = +this.route.snapshot.paramMap.get('id')!;
    this.loadDerangement();
  }

  loadDerangement(): void {
    this.derangementService.getDerangementById(this.idDerangement).subscribe({
      next: (data) => {
        this.derangement = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  // Méthode pour mettre à jour le dérangement
  updateDerangement(): void {
    if (this.derangement) {
      this.derangementService.updateDerangement(this.idDerangement, this.derangement).subscribe({
        next: () => {
          alert('Dérangement mis à jour avec succès');
          this.router.navigate(['/component/afficherderangement']);
        },
        error: (err) => {
          console.error(err);
          alert('Une erreur est survenue lors de la mise à jour du dérangement');
        }
      });
    }
  }
}

