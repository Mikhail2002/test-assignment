import { Component } from '@angular/core';

@Component({
  selector: 'app-market-intelligence',
  templateUrl: './market-intelligence.component.html',
  styleUrl: './market-intelligence.component.scss',
})
export class MarketIntelligenceComponent {
  records = [
    {
      text: 'Rate hardening in Cyber market - +15% YoY',
      indicator: 'red',
    },
    {
      text: 'New capacity entering Marine market',
      indicator: 'yellow',
    },
    {
      text: 'Environmental regulatory changes in CA',
      indicator: 'blue'
    }
  ];
}
