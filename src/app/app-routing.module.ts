import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./services/auth.guard";
import { BankListComponent } from "./bank-list/bank-list.component";
import { BankAddComponent } from "./bank-add/bank-add.component";

const routes: Routes = [
  { path: "list", component: BankListComponent, canActivate: [AuthGuard] },
  { path: "edit", component: BankAddComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
