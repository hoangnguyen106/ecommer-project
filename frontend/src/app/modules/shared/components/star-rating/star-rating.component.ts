import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {
  @Input() maxStars: number = 5; // Maximum number of stars
  @Input() selectedValue!: number; // Currently selected rating
  @Output() ratingChanged = new EventEmitter<number>(); // Event emitter for rating changes

  stars: number[] = []; // Array to hold star values

  constructor() {
    this.stars = Array(this.maxStars).fill(0);
  }

  rate(rating: number): void {
    this.selectedValue = rating;
    this.ratingChanged.emit(rating);
  }
}
