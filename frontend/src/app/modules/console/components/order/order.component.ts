import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  title = 'My Orders';
  myOrders: any;

  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.getMyOrders();
  }

  //
  getMyOrders() {
    this.authService.getMyOrders().subscribe((res) => {
      console.log(res);
      this.myOrders = res;
    });
  }
}
