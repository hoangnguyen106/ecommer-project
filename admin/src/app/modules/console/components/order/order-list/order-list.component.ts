import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../models/order';
import { Router } from '@angular/router';
import { ViewOrderComponent } from '../view-order/view-order.component';
import { DeleteOrderComponent } from '../delete-order/delete-order.component';

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
    private modalService: NgbModal,
    private router: Router
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

  openViewProduct(item: Order) {
    // Push params lên url
    this.router.navigate(['/console/list-order'], {
      queryParams: { id: item._id },
    });

    // Open view order
    const modalRef = this.modalService.open(ViewOrderComponent, this.options);
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllOrder();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Xóa order
  openDeleteOrder(item: Order) {
    const modalRef = this.modalService.open(DeleteOrderComponent, this.options);
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllOrder();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
