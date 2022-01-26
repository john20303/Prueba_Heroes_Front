import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '../../heroe.service';
import { Heroe } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  title_modal = '¿En cual grupo quieres colocar a tu súper héroe?';
  public team_selected: string;
  private id;
  public show_modal: boolean = false;
  public question_modal: string;
  public team: string = '';
  heroe: Heroe;

  public group_colors = {
    azul: '#1f8ff7',
    violeta: '#a43de3',
    naranjo: '#df5c0f',
    verde: '#0ea521',
  };
  setTeam: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroes: HeroeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this._heroes.getHeroe(this.id).subscribe((res: any) => {
      this.heroe = res.data.results[0];
    });
  }

  goBack() {
    this.router.navigate(['/listado-heroes']);
    this._heroes.getHeroes();
  }

  toggle_modal(): void {
    this.show_modal = !this.show_modal;
  }

  closeModal() {
    this.show_modal = false;
  }

  getTeam(team):void{
    console.log("Color: "+team);
    this.team = team;
    this._heroes.teams.set(this.heroe.id, this.team);
  }


  send__team(team: string): void {
    console.log("Im in child: ");
    console.log(team);
    this.getTeam(team);
    this.router.navigate(['/listado-heroes']);
    this.show_modal = false;
  }

  send_team(team: string): void {
    if (team === 'azul') {
      this.router.navigate(['/listado-heroes']);
      this.show_modal = false;
      this._heroes.getHeroes();
    }else if(team ==='violeta'){
      this.router.navigate(['/listado-heroes']);
      this.show_modal = false;
      this._heroes.getHeroes();
    }else if(team ==='naranjo'){
      this.router.navigate(['/listado-heroes']);
      this.show_modal = false;
      this._heroes.getHeroes();
    }else if(team ==='verde'){
      this.router.navigate(['/listado-heroes']);
      this.show_modal = false;
      this._heroes.getHeroes();
    }
  }
}
