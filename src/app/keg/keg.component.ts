import { Component, OnInit } from '@angular/core';
import { KegService } from './keg.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Keg } from './keg.model';
import { Router } from '@angular/router';
import { FullnessPipe } from '../fullness.pipe';


@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css'],
  providers: [KegService],
})

export class KegComponent implements OnInit {
  kegs: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private kegService: KegService, private router: Router) { }

  ngOnInit() {
    this.kegs = this.kegService.getKegs();
  }

  editKegPage(keg) {
    this.router.navigate(['keg', keg.$key]);
  }

  makeSale(keg: Keg, ounces: number) {
    let kegOunces = Number(keg.ounces);
    let drinkOunces = Number(ounces);
    if (drinkOunces > kegOunces) {
      return;
    } else {
      keg.ounces = kegOunces - drinkOunces;
      this.kegService.updateVolume(keg);
    }
  }

  fillKeg(keg: Keg) {
    const totalOunces = 1984
    keg.ounces = totalOunces;
    console.log(keg)
    this.kegService.updateVolume(keg);
  }

  kaisFunction(keg) {
    const totalOunces = 1984
    return ((keg.ounces/totalOunces)*100).toFixed() + "%";
  }

  pintsRemaining(keg) {
    const pint = 16;
    return (keg.ounces/pint);
  }

  color(keg) {
    let pints = Number(this.pintsRemaining(keg))
    if ( pints > 80 ) {
      return "#5cb85c";
    } else if ( pints > 40 ) {
      return "#f0ad4e";
    } else {
      return "#d9534f";
    }
  }
}
