import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { ListadoHeroesComponent } from './views/listado-heroes/listado-heroes.component';
import {FormsModule} from "@angular/forms";
import { SpinnerComponent } from './views/spinner/spinner.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { HeroeComponent } from './views/heroe/heroe.component';
import { ModalComponent } from './views/modal/modal.component'; // <-- import the module


@NgModule({
  declarations: [ListadoHeroesComponent, SpinnerComponent, HeroeComponent, ModalComponent],
    imports: [
        CommonModule,
        HeroesRoutingModule,
        FormsModule,
        NgxPaginationModule
    ]
})
export class HeroesModule { }
