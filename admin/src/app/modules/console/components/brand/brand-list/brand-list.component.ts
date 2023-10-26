import { Component } from '@angular/core';
import { BrandService } from '../../../services/brand.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddBrandComponent } from '../add-brand/add-brand.component';
import { Router } from '@angular/router';
import { Brand } from '../../../models/brand';
import { DeleteBrandComponent } from '../delete-brand/delete-brand.component';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
})
export class BrandListComponent {
  brands: Brand[] = [];
  id!: string;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private brandService: BrandService,
    private modalService: NgbModal,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loadAllBrand();
  }
  // Lấy ra all data brand
  loadAllBrand() {
    this.brandService.getAllBrand().subscribe((res) => {
      this.brands = res;
      console.log('brand', res);
    });
  }
  // Thêm mới Brand
  openAddBrand() {
    // Open popup add
    const modalRef = this.modalService.open(AddBrandComponent, this.options);

    modalRef.result
      .then(() => {
        this.loadAllBrand();
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // Cập nhật brand
  openEditBrand(item: Brand) {
    // Push params lên url
    this.router.navigate(['/console/list-brand'], {
      queryParams: { id: item._id },
    });

    // Open popup edit
    const modalRef = this.modalService.open(AddBrandComponent, this.options);
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllBrand();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // Xóa brand
  openDeleteBrand(item: Brand) {
    const modalRef = this.modalService.open(DeleteBrandComponent, this.options);
    modalRef.componentInstance.item = item;

    modalRef.result
      .then(() => {
        this.loadAllBrand();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
