import { Component, OnInit } from '@angular/core';
import { KegService } from './keg.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Keg } from './keg.model';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css'],
  providers: [KegService],
})

export class KegComponent implements OnInit {
  kegs: FirebaseListObservable<any[]>;

  constructor(private kegService: KegService) { }

  ngOnInit() {
    this.kegs = this.kegService.getKegs();
  }

  makeSale(keg: Keg, ounces: number) {
    console.log(keg.ounces)
    console.log(ounces)
    keg.ounces = Number(keg.ounces) - Number(ounces);
    this.kegService.updateVolume(keg);
  }
}
