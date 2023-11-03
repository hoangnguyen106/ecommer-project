import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../services/order.service';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  orders!: any;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private orderService: OrderService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.loadAllOrder();
  }

  loadAllOrder() {
    this.orderService.getAllOrder().subscribe((res) => {
      this.orders = res;
      console.log('orders', res);
    });
  }
}
