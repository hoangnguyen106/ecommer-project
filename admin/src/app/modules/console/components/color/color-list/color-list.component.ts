import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ColorService } from '../../../services/color.service';
import { AddColorComponent } from '../add-color/add-color.component';
import { Color } from '../../../models/color';
import { Router } from '@angular/router';
import { DeleteColorComponent } from '../delete-color/delete-color.component';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss'],
})
export class ColorListComponent {
  colors!: any;
  id!: string;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private colorService: ColorService,
    private modalService: NgbModal,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadAllColor();
  }
  // Get all color
  loadAllColor() {
    this.colorService.getAllColor().subscribe((res) => {
      this.colors = res;
      console.log('colors', res);
    });
  }

  // Thêm mới color
  addNewColor() {
    const modalRef = this.modalService.open(AddColorComponent, this.options);

    modalRef.result
      .then(() => {
        this.loadAllColor();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Cập nhật color
  openEditColor(item: Color) {
    // Push params lên url
    this.router.navigate(['/console/list-color'], {
      queryParams: { id: item._id },
    });

    // Open popup edit
    const modalRef = this.modalService.open(AddColorComponent, this.options);
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllColor();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Xóa brand
  openDeleteColor(item: Color) {
    const modalRef = this.modalService.open(DeleteColorComponent, this.options);
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllColor();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
