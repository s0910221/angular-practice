import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


interface ApiData {
  Name: string;
  Position: string;
  Office: string;
  Age: string;
  'Start date': string;
  Salary: string;
}


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  data: ApiData[] = [];
  num = 5;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get<ApiData[]>('http://www.mocky.io/v2/5c9e523f3000005500ee97cf').subscribe(x => {
      this.data = x;
      $(document).ready(() => {
        $('#dataTable').DataTable();
      });
    });

    this.route.queryParamMap.subscribe(params => {
      this.num = +params.get('num') || 5;
    });
  }

}
