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

  getKegByID(id){
    return this.database.object('/kegs/' + id);
  }

  updateVolume(keg){
    console.log(keg);
    let dBkeg = this.getKegByID(keg.$key);
    dBkeg.update({ounces: keg.ounces});
  }

  addKeg(newKeg: Keg) {
    this.kegs.push(newKeg);
  }
}
