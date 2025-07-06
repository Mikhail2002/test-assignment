import { Component } from '@angular/core';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss'
})
export class CommunicationComponent {
  messages = [
    {
      title: 'Policy Renewal - Auto Insurance 5/15/25',
      sender: 'Michael Roberts',
      date: 'Apr 5',
      text: "Hello Arthur, I'm reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC. The current policy expires on 6/30/2024. Would you like to review coverage option before proceeding with the renewal? I've attached the current policy details and premium breakdown for your reference.",
      attachments: 3,
      status: 'NEW'
    },
    {
      title: 'New Quote Request - Workers Comp Insurance',
      sender: 'Sarah Chen',
      date: 'Apr 5',
      text: "Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage to their insurance portfolio. I've completed the initial risk assessment based",
      attachments: 3,
      status: 'NEW'
    },
    {
      title: 'Fwd: New Submission - BPM Real Estate - EFF 4/1/24',
      sender: 'Joshua Dunmire',
      date: 'Mar 25',
      text: "Arthur, attached please find our submission for the above mentioned applicant. We have...",
      attachments: 0,
      status: 'Responded'
    },
    {
      title: 'New Business: BPM Real Estate Group, LLC',
      sender: 'Isabel Kreller',
      date: 'Feb 28',
      text: "Hello Arthur, I am pleased to present you with a submission on this client&#39;s upco...",
      attachments: 5,
      status: 'none'
    },
  ]
}
