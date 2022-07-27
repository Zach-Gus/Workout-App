import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    id: string;
    name: string;
    age: number;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => { this.id = params['id']; });
    route.queryParams.subscribe(params => {
        this.name = params['name'];
        this.age = params['age'];
        console.log(params);
    });
  }

  ngOnInit() {
  }

}
