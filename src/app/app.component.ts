import { Component, OnInit } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  user: any = null;
  loading = true;
  constructor(public auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.auth.user$.subscribe((res) => {
      console.log(res);
      this.user = res;
      this.loading = false;
      if (res) this.router.navigate(["list"]);
    });
  }

  addEntry = () => {
    this.router.navigate(["edit"]);
  };
}
