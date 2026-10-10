import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LanguageService, DestinationTranslation } from '../../services/language.service';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.css'
})
export class DestinationsComponent {
  langService = inject(LanguageService);

  get destinationsList(): DestinationTranslation[] {
    return this.langService.destinations;
  }
}
