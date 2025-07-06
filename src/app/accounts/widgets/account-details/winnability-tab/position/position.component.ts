import { Component } from '@angular/core';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrl: './position.component.scss'
})
export class PositionComponent {
  values = {
    yourScore: 82,
    marketAvg: 68,
    topCompetitor: 88
  }
}
