import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeService } from '../../heroe.service';
import { Heroe } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css'],
})
export class ListadoHeroesComponent implements OnInit {
  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString;
  p: number = 1;
  private someArrayOfThings!: any[];

  // The child component : spinner
  @ViewChild('spi') spinner;


  constructor(public heroesService: HeroeService, private router: Router) { }

  submitSearch() {
    this.heroesService.resetPager();
    this.heroesService.getHeroes(this.searchString);
  }



  go_to(id){
    this.router.navigate(['/heroe',id]);
  }



  ngOnInit(): void {
    this.heroesService.getHeroes();
  }



}
