import { Component } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { ColorService } from '../../services/color.service';
import { AddColorComponent } from '../add-color/add-color.component';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss'],
})
export class ColorListComponent {
  colors!: any;

  options: NgbModalOptions = {
    size: 'lg',
    backdrop: 'static',
    backdropClass: 'light-blue-backdrop',
  };

  constructor(
    private colorService: ColorService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.loadAllColor();
  }

  loadAllColor() {
    this.colorService.getAllColor().subscribe((res) => {
      this.colors = res;
      console.log('colors', res);
    });
  }

  addNewProject() {
    const modalRef = this.modalService.open(AddColorComponent, this.options);

    modalRef.result
      .then((result: any) => {
        if (result) {
          setTimeout(() => {
            this.loadAllColor();
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
