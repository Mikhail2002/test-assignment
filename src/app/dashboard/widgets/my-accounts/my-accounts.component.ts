import { Component } from '@angular/core';

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.component.html',
  styleUrl: './my-accounts.component.scss'
})
export class MyAccountsComponent {
  accounts = [
    { 
      name: 'NAMEX Tech Solutions',
      type: 'Large Enterprise',
      line: 'D&O Liability',
      broker: 'Wills Towers',
      renewalDate: '04/16/2025',
      premium: '2.3M',
      ratedPremium: '2.8M',
      lossRatio: 32,
      appetite: 'HIGH',
      status: 'Active',
      triage: 180,
      winnability: 'Very Strong'
    },
    { 
      name: 'Alliance Healthcare Systems',
      type: 'Mid-Market',
      line: 'Medical Malpractice',
      broker: 'Aon Risk',
      renewalDate: '06/30/2025',
      premium: '1.7M',
      ratedPremium: '1.9M',
      lossRatio: 38,
      appetite: 'MEDIUM',
      status: 'Under review',
      triage: 165,
      winnability: 'Strong'
    },
    { 
      name: 'Maritime Logistics Corp',
      type: 'Shipping/Logistics',
      line: 'Marine Cargo',
      broker: 'Marsh McLennan',
      renewalDate: '09/05/2025',
      premium: '875K',
      ratedPremium: '920k',
      lossRatio: 25,
      appetite: 'HIGH',
      status: 'Active',
      triage: 182,
      winnability: 'Very Strong'
    },
    { 
      name: 'GreenField Energy Ltd',
      type: 'Energy Sector',
      line: 'Environmental Liability',
      broker: 'Aon Risk',
      renewalDate: '07/22/2025',
      premium: '1.2M',
      ratedPremium: '1.4M',
      lossRatio: 67,
      appetite: 'CAUTIONS',
      status: 'Under review',
      triage: 158,
      winnability: 'Medium'
    },
  ]

  getLossRatioColor(value: number): string {
    if (value > 60) return 'red';
    if (value > 35) return 'yellow';
    return 'green';
  }
}
