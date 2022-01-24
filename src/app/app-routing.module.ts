import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroeComponent } from './heroes/views/heroe/heroe.component';

const routes: Routes = [
  //LoadChildren de las rutas del listado de los heroes
  {path: 'listado-heroes', loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule)},
  {path:'heroe/:id', component: HeroeComponent},
  {path: '', redirectTo: 'listado-heroes', pathMatch: 'full'},
  {path: '**', redirectTo: 'listado-heroes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
