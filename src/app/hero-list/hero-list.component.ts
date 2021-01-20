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
  order: string;

  @Output()
  selectedHero: EventEmitter<Hero> = new EventEmitter();

  constructor() {
    this.heroes = heroes;
  }
  
  ngOnInit(): void {
  }
  
  getHeroes() {
    return this.heroes;
  }
  
  // metodo sobre el que actua la deteccion de cambios ( si cambia el valor de un heroe por su id )
  trackByHeroes(index: number, hero: Hero) {
    return hero.id;  // object identity
  }
  
  selectHero(heroSelected: Hero): void {
    this.selectedHero.emit(heroSelected);
    this.heroSelected = heroSelected;
  }

  compararHero(hero: Hero, heroSelected: Hero): boolean {
    if (!heroSelected || !hero) return false;
    if (hero === heroSelected) return true;
    if (hero.id === heroSelected.id) return true;
  }
  
  changeOrder(): void {
    this.heroes;
    if (this.order === '') {
      this.order = 'asc';
    } else if (this.order === 'asc') {
      this.order = 'desc';
    } else {
      this.order = 'asc';
    }
  }
}
