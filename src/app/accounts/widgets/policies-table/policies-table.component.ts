import { Component } from '@angular/core';

@Component({
  selector: 'app-policies-table',
  templateUrl: './policies-table.component.html',
  styleUrl: './policies-table.component.scss',
})
export class PoliciesTableComponent {
  policies = [
    {
      id: '17030212',
      name: 'Marine Cargo',
      effDate: '6/30/2026',
      expDate: '6/30/2027',
      status: 'Active',
      expiringTech: '$587,500',
      expiringPremium: '$605,000',
      renewalToTech: '$610,000',
      renewalTech: '$620,000',
      renewalPremium: '$625,000',
      rateChance: 3.3,
      lossRatio: 22
    },
    {
      id: '4631092',
      name: 'General Liability',
      effDate: '6/30/2026',
      expDate: '6/30/2027',
      status: 'Active',
      expiringTech: '$160,000',
      expiringPremium: '$165,000',
      renewalToTech: '$170,000',
      renewalTech: '$172,000',
      renewalPremium: '$175,000',
      rateChance: 6.1,
      lossRatio: 55
    },
    {
      id: '9182371',
      name: 'Workers Comp',
      effDate: 'Pending',
      expDate: 'Pending',
      status: 'Pending',
      expiringTech: '$0',
      expiringPremium: '$0',
      renewalToTech: '$73,500',
      renewalTech: '$75,000',
      renewalPremium: '$75,000',
      rateChance: null,
      lossRatio: null
    },
    {
      id: '5274936',
      name: 'Umbrella',
      effDate: '13/03/2026',
      expDate: '13/03/2027',
      status: 'Active',
      expiringTech: '$245,000',
      expiringPremium: '$250,000',
      renewalToTech: '$267,000',
      renewalTech: '$270,000',
      renewalPremium: '$275,000',
      rateChance: 10,
      lossRatio: 78
    },
    
  ];

  getLossRatioColor(value: number | null): string {
    if (value){
      if (value > 60) return 'red';
      if (value > 35) return 'yellow';
      return 'green';
    } else{
      return 'none';
    }
    
  }

}
