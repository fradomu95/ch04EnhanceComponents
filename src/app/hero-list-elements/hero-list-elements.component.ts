import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero.model';

@Component({
  selector: 'app-hero-list-elements',
  templateUrl: './hero-list-elements.component.html',
  styleUrls: ['./hero-list-elements.component.scss']
})
export class HeroListElementsComponent implements OnInit {

  @Input()
  data: Hero[]

  type: string;

  constructor() { }

  ngOnInit(): void {
    this.type = "table";
  }

  mostrarCartas() {
    this.type = "card";
  }

  mostrarTabla() {
    this.type = "table"
  }
}
