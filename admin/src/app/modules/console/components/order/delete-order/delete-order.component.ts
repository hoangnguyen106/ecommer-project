import { Component, Input } from '@angular/core';
import { Order } from '../../../models/order';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  styleUrls: ['./delete-order.component.scss'],
})
export class DeleteOrderComponent {
  @Input() item!: Order;
  constructor(
    private _NgbActiveModal: NgbActiveModal,
    private orderService: OrderService
  ) {}

  confirmDelete() {
    this.orderService.deleteOrder(this.item._id).subscribe((res) => {
      if (res != null) {
        this._NgbActiveModal.close();
      }
    });
  }

  onClose() {
    this._NgbActiveModal.dismiss();
  }
}
