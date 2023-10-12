import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers!: any;

  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.loadAllCustomer();
  }

  loadAllCustomer() {
    this.userService.getAllUser().subscribe((res) => {
      this.customers = res;
      console.log('customer', res);
    });
  }
}
