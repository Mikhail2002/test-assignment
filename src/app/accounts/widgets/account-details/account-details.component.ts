import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss'
})
export class AccountDetailsComponent implements OnInit{

  activeTab: string = 'winnability';
  openedGroup: string | null = null;

  tabGroups = [
    {
      key: 'decision-support',
      label: 'DECISION SUPPORT',
      children: [
        { key: 'winnability', label: 'Winnability' },
        { key: 'exposure-review', label: 'Exposure Review & Suggested Coverage' },
        { key: 'portfolio-strategy', label: 'Portfolio Strategy Alignment' },
        { key: 'broker-analytics', label: 'Broker Analytics' },
      ]
    },
    {
      key: 'risk-assessment',
      label: 'RISK ASSESSMENT',
      children: [
        { key: '1', label: '1' },
        { key: '2', label: '2' },
        { key: '3', label: '3' },
        { key: '4', label: '4' },
        { key: '5', label: '5' },
        { key: '6', label: '6' }
      ]
    },
    {
      key: 'documents-and-compliance',
      label: 'DOCUMENTS AND COMPLIANCE',
      children: [
        { key: 'a', label: 'a' },
        { key: 'b', label: 'b' },
      ]
    },
  ];

  ngOnInit(): void {
    if (this.tabGroups.length > 0) {
      this.openedGroup = this.tabGroups[0].key;
      this.activeTab = this.tabGroups[0].children[0]?.key ?? '';
    }
  }

  toggleGroup(groupKey: string) {
    this.openedGroup = this.openedGroup === groupKey ? null : groupKey;
  }

  selectTab(tabKey: string) {
    this.activeTab = tabKey;
  }

  isChildActive(children: { key: string }[]): boolean {
    return children.some(c => c.key === this.activeTab);
  }
}
