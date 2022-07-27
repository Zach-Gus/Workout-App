import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-hockey-off',
  templateUrl: './hockey-off.component.html',
  styleUrls: ['./hockey-off.component.css']
})
export class HockeyOffComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }


}
