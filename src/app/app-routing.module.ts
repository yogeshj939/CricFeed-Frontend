import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverComponent } from './components/over/over.component';
import { LoginComponent } from './components/login/login.component';
import { MatchCardComponent } from './components/match-card/match-card.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'match', component: MatchCardComponent},
  { path: 'login', component: LoginComponent },
  {path : 'over/:matchId', component: OverComponent},
  { path: 'scoreFeed/:matchId', component: OverComponent},
  { path: 'over', component: OverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
