import { Injectable } from '@angular/core';
import { Hero } from '../modelos/hero';
import { HEROES } from '../modelos/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes():Hero[]{
    return HEROES;
  }

  getHero(id:number):Hero{
    return <Hero> HEROES.find(h => h.id == id);    
  }
}
