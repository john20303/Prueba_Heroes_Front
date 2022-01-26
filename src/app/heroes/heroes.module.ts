import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { ListadoHeroesComponent } from './views/listado-heroes/listado-heroes.component';
import {FormsModule} from "@angular/forms";
import { SpinnerComponent } from './views/spinner/spinner.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeroeComponent } from './views/heroe/heroe.component';


@NgModule({
  declarations: [ListadoHeroesComponent, SpinnerComponent, HeroeComponent],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class HeroesModule { }
