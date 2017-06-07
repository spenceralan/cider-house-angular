import { Component, OnInit } from '@angular/core';
import { KegService } from './keg.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})
export class KegComponent implements OnInit {
  kegs: FirebaseListObservable<any[]>;
  constructor() { }

  ngOnInit() {
  }

}
