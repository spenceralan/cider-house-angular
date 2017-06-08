import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppComponent } from './app.component';
import { KegComponent } from './keg/keg.component';
import { IndexComponent } from './index/index.component';
import { KegFormComponent } from './keg-form/keg-form.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { AdminComponent } from './admin/admin.component';
import { routing } from './app.routing';
import { FullnessPipe } from './fullness.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    KegComponent,
    IndexComponent,
    KegFormComponent,
    AddKegComponent,
    EditKegComponent,
    AdminComponent,
    FullnessPipe
  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
