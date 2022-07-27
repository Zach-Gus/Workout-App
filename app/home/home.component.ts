import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
    }

    goToAbout(): void {
        this.router.navigate(['/about/21'], { queryParams: { name: 'Jayne', age:21 } });
    }

    gotoSports(): void {
      this.router.navigate(['/sports']);
  }
  gotoComments(): void{
    this.router.navigate(['/comments']);
  }

  ngOnInit() {
  }

}
