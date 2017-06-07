import { Injectable } from '@angular/core';

@Injectable()
export class KegService {
  kegs: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.kegs = database.list('kegs');
  }

  getKegs(){
    return this.kegs;
  }
}
