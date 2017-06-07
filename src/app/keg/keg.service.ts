import { Injectable } from '@angular/core';
import { Keg } from '../keg/keg.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class KegService {
  kegs: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.kegs = database.list('kegs');
  }

  getKegs(){
    return this.kegs;
  }

  addKeg(newKeg: Keg) {
    this.kegs.push(newKeg);
  }
}
