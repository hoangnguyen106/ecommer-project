import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
  @Input() colorProduct: any;
  @Output() idColor = new EventEmitter<any>();
  ngOnInit(): void {
    console.log(this.colorProduct);
  }

  getIdColor(id: any) {
    const dataID = id;
    this.idColor.emit(dataID);
  }
}
