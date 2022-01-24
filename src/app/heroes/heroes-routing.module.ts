import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroeComponent } from './views/heroe/heroe.component';
import { ListadoHeroesComponent } from './views/listado-heroes/listado-heroes.component';

const routes: Routes = [
  {
    path: '', component: ListadoHeroesComponent, children: [
      {path: '', component: ListadoHeroesComponent},
      // {path: 'heroe/:id', component: HeroeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
