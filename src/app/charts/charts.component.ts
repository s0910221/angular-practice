import { Component, OnInit } from '@angular/core';
import { chartPieDemo } from '../chart-pie-demo';
import { chartAreaDemo } from '../chart-area-demo';
import { chartBarDemo } from '../chart-bar-demo';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    chartPieDemo();
    chartAreaDemo();
    chartBarDemo();
  }

}
