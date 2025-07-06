import { Component } from '@angular/core';

@Component({
  selector: 'app-overall-score',
  templateUrl: './overall-score.component.html',
  styleUrl: './overall-score.component.scss',
})
export class OverallScoreComponent {
  score = {
    percent: 82,
    estimation: 'Very Strong',
  };
}
