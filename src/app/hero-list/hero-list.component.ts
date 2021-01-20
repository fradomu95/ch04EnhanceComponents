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
  
  // Metodo sobre el que actua la deteccion de cambios ( si cambia el valor de un heroe por su id )
  trackByHeroes(index: number, hero: Hero) {
    return hero.id;  // object identity
  }
  
  /**
   * Metodo donde emitimos el heroe elegido y ademas lo guardamos en nuestra variable con razón de seleccionarlo en la tabla
   * @param heroSelected 
   */
  selectHero(heroSelected: Hero): void {
    this.selectedHero.emit(heroSelected);
    this.heroSelected = heroSelected;
  }

  /**
   * Metodo para comparar dos heroes de manera que se comparan sus id, si son el mismo objetos o si alguno es nulo, para la comprobacion a prueba de errores
   * @param hero 
   * @param heroSelected 
   */
  compararHero(hero: Hero, heroSelected: Hero): boolean {
    if (!heroSelected || !hero) return false;
    if (hero === heroSelected) return true;
    if (hero.id === heroSelected.id) return true;
  }

  /**
   * Metodo para cambiar el orden de ordenacion de la tabla al hacer click
   */
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
