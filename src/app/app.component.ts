import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedHero: Hero;

  ngOnInit() {
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }
}
