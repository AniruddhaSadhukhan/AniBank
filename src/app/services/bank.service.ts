import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { AuthService } from "./auth.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class BankService {
  constructor(
    private firestore: AngularFirestore,
    public auth: AuthService,
    private afAuth: AngularFireAuth
  ) {}

  addBank(data) {
    return this.firestore
      .collection("users")
      .doc(this.auth.uid)
      .collection("banks")
      .add(data);
  }
  getBank() {
    return this.firestore
      .collection("users")
      .doc(this.auth.uid)
      .collection("banks")
      .valueChanges({ idField: "id" });
  }
  updateBank(id, data) {
    return this.firestore
      .collection("users")
      .doc(this.auth.uid)
      .collection("banks")
      .doc(id)
      .set(data);
  }
  deleteBank(id) {
    return this.firestore
      .collection("users")
      .doc(this.auth.uid)
      .collection("banks")
      .doc(id)
      .delete();
  }
}
