import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../keg/keg.model';
import { Router } from '@angular/router';
import { routing } from '../app.routing';


@Component({
  selector: 'app-keg-form',
  templateUrl: './keg-form.component.html',
  styleUrls: ['./keg-form.component.css']
})
export class KegFormComponent implements OnInit {
  currentRoute: string = this.router.url;
  constructor(private router: Router) { }
  @Input() keg;
  @Output() saveKeg = new EventEmitter();
  @Output() updateKeg = new EventEmitter();
  @Output() deleteKeg = new EventEmitter();



  save(brand, name, price, content) {
    let newKeg: Keg = new Keg(brand.value, name.value, price.value, content.value);
    this.saveKeg.emit(newKeg);
  }

  update(keg) {
    this.updateKeg.emit(keg);
  }

  delete(keg) {
    this.router.navigate(['admin']);
    this.deleteKeg.emit(keg);
  }

  ngOnInit() {
    console.log(this.currentRoute);
  }

}
