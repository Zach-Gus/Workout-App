import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-hockey-in',
  templateUrl: './hockey-in.component.html',
  styleUrls: ['./hockey-in.component.css']
})
export class HockeyInComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
