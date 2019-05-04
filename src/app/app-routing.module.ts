import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GimosComponent } from './gimos/gimos.component';
import { ModComponent } from './mod/mod.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre_el_canal', component: AboutComponent},
  {path: 'gimos', component: GimosComponent},
  {path: 'moderador', component: ModComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
