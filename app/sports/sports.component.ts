import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

constructor(private router: Router) { }



gotoHockeyOff(): void {
    this.router.navigate(['/hockey-off']);
  }
  ngOnInit() {
  }

gotoHockeyIn(): void{
  this.router.navigate(['/hockey-in']);
}

gotoLaxOff(): void{
  this.router.navigate(['/lax-off']);
}

gotoLaxIn(): void{
  this.router.navigate(['/lax-in']);
}

gotoSoccerOff(): void{
  this.router.navigate(['/soccer-off']);
}

gotoSoccerIn(): void{
  this.router.navigate(['/soccer-in']);
}


  
}
