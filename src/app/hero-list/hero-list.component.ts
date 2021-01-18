import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from '../hero.model';
import { heroes } from '../hero.data';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = [];
  heroSelected: Hero;

  @Output()
  selectedHero: EventEmitter<Hero> = new EventEmitter();

  constructor() {
    this.heroes = heroes;
   }

  ngOnInit(): void {

  }

  // metodo sobre el que actua la deteccion de cambios ( si cambia el valor de un heroe por su id )
  trackByHeroes(index: number, hero: Hero) {
    return hero.id;  // object identity
  }

  selectHero(heroSelected: Hero): void {
    this.selectedHero.emit(heroSelected);
    this.heroSelected = heroSelected;
  }

}
