import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chart-area-demo';
import { chartPieDemo } from '../chart-pie-demo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    chartAreaDemo();
    chartPieDemo();
  }

  gotoTable() {
    this.router.navigate(['/tables'], { queryParams: { num: 10 } });
  }

}
