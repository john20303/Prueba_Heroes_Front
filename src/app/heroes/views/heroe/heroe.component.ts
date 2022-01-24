import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeService } from '../../heroe.service';
import { Heroe } from '../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  @ViewChild('modal')modal;
  private id;
  public heroe: Heroe;
  public question_modal: string;
  public team:string = "";

  constructor(private route: ActivatedRoute, private heroesService: HeroeService,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.heroesService.getHeroe(this.id).subscribe((data:any) => {
        const temp = data.data.results[0];
        this.heroe = new Heroe(temp.id, temp.name, temp.description, temp. modified, temp.thumbnail, temp.resourceURI,this.heroesService.getTeamColor(temp.id));
        console.log("Tiene equipo?");
        console.log(this.heroe);
        console.log(this.heroe.teamColor);
        this.team = this.heroe.teamColor;
      });
    });
    
  }

  goBack() {
    this.router.navigate(['/listado-heroes']);
  }

  getTeam(team):void{
    console.log("Color: "+team);
    this.team = team;
    this.heroesService.teams.set(this.heroe.id, this.team);
  }

  launchModal():void{
    this.question_modal="¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

}
