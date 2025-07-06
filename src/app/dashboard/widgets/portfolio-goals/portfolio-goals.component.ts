import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-goals',
  templateUrl: './portfolio-goals.component.html',
  styleUrl: './portfolio-goals.component.scss'
})
export class PortfolioGoalsComponent {
  greenRatio: number = 35;
  yellowRatio: number = 25;
  redRatio: number = 40;

  tgRatio: number = 42;
  currentRatio: number = 27.2;

  greenRetention: number = 14;
  yellowRetention: number = 34;
  redRetention: number = 18;

  tgRetention: number = 60;
  currentRetention: number = 60;

  businessTargetGoal: number = 12;
  businessTargetCurrent: number = 8.1;
  businessTargetCurrentPercent: number = Math.trunc((100/this.businessTargetGoal) * this.businessTargetCurrent);

  gwpTargetGoal: number = 42;
  gwpTargetCurrent: number = 28.4;
  gwpTargetCurrentPercent: number = Math.trunc((100/this.gwpTargetGoal) * this.gwpTargetCurrent);

}
