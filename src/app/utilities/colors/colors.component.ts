import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  type = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    // this.route.queryParamMap.subscribe(params => {
    //   this.type = +params.get('type');
    // });
    this.route.paramMap.subscribe(params => {
      this.type = +params.get('type');
    });
  }

  goNext() {
    const newId = this.type % 3 + 1;
    this.router.navigate(['/utilities', 'colors', newId]);
  }

}
