import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg/keg.model';


@Component({
  selector: 'app-keg-form',
  templateUrl: './keg-form.component.html',
  styleUrls: ['./keg-form.component.css']
})
export class KegFormComponent implements OnInit {
  constructor() { }

  @Output() saveKeg = new EventEmitter();

  save(brand, name, price, content) {
    let newKeg: Keg = new Keg(brand.value, name.value, price.value, content.value);
    this.saveKeg.emit(newKeg);
  }

  ngOnInit() {
  }

}
