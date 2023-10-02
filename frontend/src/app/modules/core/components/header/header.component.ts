import {
  AfterContentChecked,
  AfterViewChecked,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { AuthService } from 'src/app/modules/console/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbTypeahead],
})
export class HeaderComponent implements OnInit {
  productDetail: any = 0;
  selectedItem: any;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.getAllCart();
  }
  // Lấy tất cả sản phẩm được thêm vào giỏ hàng
  getAllCart() {
    this.authService.getCart().subscribe((res) => {
      this.productDetail = res;

      console.log('=================> ', this.productDetail);
    });
  }

  // total sub
  calculateTotalPrice(): number {
    return this.productDetail.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
  }

  handleLogout() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200), // Debounce user input
      distinctUntilChanged(), // Only emit distinct values
      tap(() => {
        // You can add loading indicators or other UI changes here
      }),
      switchMap((term) => {
        // Implement your own search logic here (e.g., fetch data from an API)
        const suggestions = this.searchSuggestion(term);
        return of(suggestions);
      })
    );

  private searchSuggestion(term: string): string[] {
    // Implement your suggestion logic (e.g., filter from a list)
    const suggestions: string[] = this.productDetail;
    console.log('suggestion =', suggestions);

    return suggestions.filter((option) => {
      console.log(option);
      option.toLowerCase().includes(term.toLowerCase());
    });
  }
}
