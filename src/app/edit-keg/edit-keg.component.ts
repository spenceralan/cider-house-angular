import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Keg } from '../keg/keg.model';
import { KegService } from '../keg/keg.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-edit-keg',
  templateUrl: './edit-keg.component.html',
  styleUrls: ['./edit-keg.component.css'],
  providers: [KegService]
})
export class EditKegComponent implements OnInit {
  kegID: string = null;
  kegObject;
  constructor(
    private kegService: KegService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.kegID = urlParameters['id'];
    });
    let keg = this.kegService.getKegByID(this.kegID).subscribe(subscribedKeg => { this.kegObject = subscribedKeg});
  }

  updateKeg(keg){
    this.kegService.updateKeg(keg);
  }

  deleteKeg(keg){
    this.kegService.deleteKeg(keg);
  }

}
