import { Component, OnInit } from "@angular/core";
import { BankService } from "../services/bank.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-bank-list",
  templateUrl: "./bank-list.component.html",
  styleUrls: ["./bank-list.component.css"],
})
export class BankListComponent implements OnInit {
  constructor(private service: BankService, private router: Router) {}
  displayedColumns: string[];
  displayedColumnsWithActions: string[];
  labels: string[];
  dataSource;

  ngOnInit(): void {
    this.service.getBank().subscribe((data) => {
      data.forEach((bank) => {
        bank["sDate"] = bank["sDate"].toDate();
        bank["mDate"] = bank["mDate"].toDate();
      });
      data.sort((a, b) => a.mDate - b.mDate);
      this.displayedColumns = [
        "bank",
        "acNo",
        "fName",
        "sName",
        "sDate",
        "mDate",
        "type",
        "percentage",
        "interest",
        "amount",
        "notes",
      ];
      this.displayedColumnsWithActions = [...this.displayedColumns, "actions"];
      this.labels = [
        "Bank",
        "Account No",
        "First Name",
        "Second Name",
        "Start Date",
        "Maturity Date",
        "Type",
        "Percentage",
        "Interest",
        "Amount",
        "Notes",
      ];
      this.dataSource = data;
    });
  }

  edit(data) {
    this.router.navigate(["edit"], { queryParams: data });
  }

  delete(data) {
    this.service.deleteBank(data.id).then((data) => {
      console.log("Deleted");
    });
  }
}
