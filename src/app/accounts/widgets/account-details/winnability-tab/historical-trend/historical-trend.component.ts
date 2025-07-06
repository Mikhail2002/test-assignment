import { Component, Inject, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-historical-trend',
  templateUrl: './historical-trend.component.html',
  styleUrl: './historical-trend.component.scss'
})
export class HistoricalTrendComponent implements OnInit{
  labels = ['Jan', 'Feb', 'Mar', 'Apr', 'Now'];

  width = 275;
  height = 75;

  pathD = '';

  points = [25, 35, 55, 60, 70];
  midPointsY = [40, 50, 45, 60]; 

  ngOnInit() {
    this.pathD = this.buildZigZagPathCustom(this.points, this.midPointsY, this.width, this.height);
  }

  buildZigZagPathCustom(
    points: number[],
    midPointsY: number[] | null,
    width: number,
    height: number
  ): string {
    const stepX = width / (points.length - 1);
    const xs: number[] = [];
    const ys: number[] = [];

    for (let i = 0; i < points.length - 1; i++) {
      xs.push(i * stepX);
      ys.push(points[i]);

      xs.push(i * stepX + stepX / 2);

      if (midPointsY && midPointsY[i] !== undefined) {
        ys.push(midPointsY[i]);
      } else {
        ys.push((points[i] + points[i + 1]) / 2);
      }
    }
    xs.push((points.length - 1) * stepX);
    ys.push(points[points.length - 1]);

    let d = `M ${xs[0]} ${height - ys[0]}`;
    for (let i = 1; i < xs.length; i++) {
      d += ` L ${xs[i]} ${height - ys[i]}`;
    }
    return d;
  }
}
