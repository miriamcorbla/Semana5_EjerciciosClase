import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }, //cuando nos teclean algo en la ruta se lanza lo que se tiene que visualizar
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: '', redirectTo:'/dashboard', pathMatch:'full'},
  { path: 'detalle/:id', component: HeroesDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
