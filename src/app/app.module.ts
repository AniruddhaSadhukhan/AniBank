import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";

const AngularMaterial = [
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatMenuModule,
  MatTooltipModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
];

const config = {
  apiKey: "<API_key>",
  authDomain: "anibankweb.firebaseapp.com",
  databaseURL: "https://anibankweb.firebaseio.com",
  projectId: "anibankweb",
  storageBucket: "anibankweb.appspot.com",
  messagingSenderId: "118880268083",
  appId: "1:118880268083:web:1de7febb61e0a57c8ad846",
  measurementId: "G-P5NLM7FQ2K",
};
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BankListComponent } from "./bank-list/bank-list.component";
import { BankAddComponent } from "./bank-add/bank-add.component";
import { MatNativeDateModule, MAT_DATE_LOCALE } from "@angular/material/core";

@NgModule({
  declarations: [AppComponent, BankListComponent, BankAddComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...AngularMaterial,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "en-GB" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
