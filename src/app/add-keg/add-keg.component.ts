import { Component, OnInit, Input } from '@angular/core';
import { KegService } from '../keg/keg.service';
import { Keg } from '../keg/keg.model';

@Component({
  selector: 'app-add-keg',
  templateUrl: './add-keg.component.html',
  styleUrls: ['./add-keg.component.css'],
  providers: [KegService]
})
export class AddKegComponent implements OnInit {

  constructor(private kegService: KegService) { }

  saveKeg(keg) {
    this.kegService.addKeg(keg);
  }

  ngOnInit() {
  }


}
