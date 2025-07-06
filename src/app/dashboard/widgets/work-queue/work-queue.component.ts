import { Component } from '@angular/core';

@Component({
  selector: 'app-work-queue',
  templateUrl: './work-queue.component.html',
  styleUrl: './work-queue.component.scss'
})
export class WorkQueueComponent {
  activeTab = 1;

  items = [
    {
      originator: 'Sam Masters',
      client: 'NAMEX Tech Solutions',
      line: 'Cyber Liability',
      type: 'Underwriter Referral',
      status: 'New',
      created: '04/16/2025'
    },
    {
      originator: 'Annalise Willis',
      client: 'Maritime Logistics Corp',
      line: 'Marine Cargo',
      type: 'Underwriter Referral',
      status: 'New',
      created: '04/20/2025'
    },
    {
      originator: 'Patrick Devenport',
      client: 'GreenField Energy Ltd',
      line: 'Environmental',
      type: 'Loss Control Request',
      status: 'New',
      created: '04/16/2025'
    },
    {
      originator: 'Anna Killian',
      client: 'NorthStar Financial Group',
      line: 'D&O Liability',
      type: 'Underwriter Referral',
      status: 'Pending Review',
      created: '04/22/2025'
    },
    {
      originator: 'Anna Killian',
      client: 'Alliance Healthcare Systems',
      line: 'Medical Malpractice',
      type: 'Email',
      status: 'Completed',
      created: '04/28/2025'
    },
    {
      originator: 'Me',
      client: 'QuantumTech Industries',
      line: 'Product Liability',
      type: 'Email',
      status: 'Completed',
      created: '04/20/2025'
    },
]

  makeInitials(name: string){
    const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();

    if (name === 'Me'){
      return 'MK'
    } else {
      return initials;
    }
  }
  
}
