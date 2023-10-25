import { Component } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddBrandComponent } from '../add-brand/add-brand.component';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
})
export class BrandListComponent {
  brands!: any;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private brandService: BrandService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.loadAllBrand();
  }

  loadAllBrand() {
    this.brandService.getAllBrand().subscribe((res) => {
      this.brands = res;
      console.log('brand', res);
    });
  }

  addNewProject() {
    const modalRef = this.modalService.open(AddBrandComponent, this.options);

    modalRef.result
      .then(() => {
        this.loadAllBrand();
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
