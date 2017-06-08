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
    console.log(keg.$key);
  }

  makeSale(keg: Keg, ounces: number) {
    console.log(keg.ounces)
    console.log(ounces)
    keg.ounces = Number(keg.ounces) - Number(ounces);
    this.kegService.updateVolume(keg);
  }
}
