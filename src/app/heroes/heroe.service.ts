import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from './views/interfaces/heroe.interface';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HeroeService {

  private ApiUrl = '//localhost:8080/api/marvel/';
  public heroes: Array<Heroe> = [];

  public page = 0;
  public step = 20;
  public total = 0;

  public group_colors = {"azul" : "#1f8ff7",
                        "violeta":"#a43de3",
                        "naranjo":"#df5c0f",
                        "verde":"#0ea521"}
  
  public teams = new Map();

  constructor(private http: HttpClient) {}

  resetPager() {
    this.page = 0;
  }

  getHeroes (page?: number) {
    console.log("TEAMS");
    console.log(Array.from(this.teams));
    if (page || page === 0) {
      this.page = page;
    }
    const url =  this.ApiUrl;
    this.http.get<any>(url).subscribe((data) => {
      this.heroes = [];
      this.total = Math.ceil(data.data.total / this.step);
      data.data.results.forEach( result => {
          this.heroes.push(new Heroe(
            result.id,
            result.name,
            result.description,
            result.modified,
            result.thumbnail,
            result.resourceURI,
            this.getTeamColor(result.id)
          ));
        }
      );
    });
  }

  getHeroe(id) {
    return this.http.get<any>(`${this.ApiUrl}`,id);
  }

  getTeamColor(id):string{
    if(this.teams.get(id)!=undefined){
      return this.teams.get(id);
    }
    else{
      return "";
    }
  }
}
