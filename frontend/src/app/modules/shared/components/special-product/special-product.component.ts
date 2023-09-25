import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-special-product',
  templateUrl: './special-product.component.html',
  styleUrls: ['./special-product.component.scss'],
})
export class SpecialProductComponent {
  selectedRating: number = 3;

  @Input() specialProducts: any;

  onRatingChanged(rating: number): void {
    this.selectedRating = rating;
    // Add any additional logic you need when the rating changes.
  }
}
