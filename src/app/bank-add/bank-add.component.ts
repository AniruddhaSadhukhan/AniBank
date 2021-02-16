import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { BankService } from "../services/bank.service";

@Component({
  selector: "app-bank-add",
  templateUrl: "./bank-add.component.html",
  styleUrls: ["./bank-add.component.css"],
})
export class BankAddComponent implements OnInit {
  form: FormGroup;
  isEditing = false;
  id;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: BankService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((data) => {
      console.log(data);
      let sDate = null;
      let mDate = null;
      if (data.bank) {
        this.isEditing = true;
        sDate = new Date(data.sDate);
        mDate = new Date(data.mDate);
        this.id = data.id;
      }
      this.form = this.fb.group({
        bank: [data.bank || null, [Validators.required]],
        acNo: [data.acNo || null, Validators.required],
        fName: [data.fName || null, Validators.required],
        sName: [data.sName || null],
        sDate: [sDate || null, Validators.required],
        mDate: [mDate || null, Validators.required],
        amount: [data.amount || null],
        percentage: [data.percentage || null],
        interest: [data.interest || null],
        type: [data.type || null, Validators.required],
        notes: [data.notes || null],
      });
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      if (this.isEditing) {
        this.service.updateBank(this.id, this.form.value).then((data) => {
          console.log(data);
          console.log("Done");
          this.router.navigate(["list"]);
        });
      } else
        this.service.addBank(this.form.value).then((data) => {
          console.log(data);
          console.log("Done");
          this.router.navigate(["list"]);
        });
    }
  }

  cancel() {
    this.router.navigate(["list"]);
  }
}
