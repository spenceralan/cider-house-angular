import { Component, OnInit } from '@angular/core';
import { KegService } from './keg.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Keg } from './keg.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css'],
  providers: [KegService],
})

export class KegComponent implements OnInit {
  kegs: FirebaseListObservable<any[]>;
  constructor(private kegService: KegService, private router: Router) { }

  ngOnInit() {
    this.kegs = this.kegService.getKegs();
  }

  editKegPage(keg) {
    this.router.navigate(['keg', keg.$key]);
  }

  makeSale(keg: Keg, ounces: number) {
    keg.ounces = Number(keg.ounces) - Number(ounces);
    this.kegService.updateVolume(keg);
  }

  kaisFunction(keg) {
    const totalOunces = 1984
    return ((keg.ounces/totalOunces)*100).toFixed();
  }

  pintsRemaining(keg) {
    const pint = 16;
    return (keg.ounces/pint);
  }
}
