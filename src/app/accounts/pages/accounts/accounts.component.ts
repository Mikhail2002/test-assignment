import { Component } from '@angular/core';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {
  breadcrumbItems = ['Dashboard', 'Accounts', 'Maritime Logistics Corp'];

  accountInfo = {
    name: "Maritime Logistics Corp",
    address: "425 Harbor Boulevard, Suite 300 Seattle, WA 98104",
    existingAccount: "54383",
    broker: "Marsh McLennan",
    underwriter: "Kate Johnson"
  }
}
