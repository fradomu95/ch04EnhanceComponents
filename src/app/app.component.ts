import { Component, OnInit } from '@angular/core';
import { heroes } from './hero.data';
import { Hero } from './hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  loading: boolean;

  ngOnInit() {
    this.heroes = heroes;
    this.loading = true;
    
    // Time out para terminar la carga
    setTimeout(() => {
      this.loading = false;
    },3000); // 7000 si se quiere poner a 7 segundos
  }
  
  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }


}
