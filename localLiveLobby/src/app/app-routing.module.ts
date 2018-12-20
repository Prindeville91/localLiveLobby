import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component' 
import { DashboardComponent } from './dashboard/dashboard.component'
import { MasterDashComponent } from './master-dash/master-dash.component'
import { PlayerDashComponent } from './player-dash/player-dash.component'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { NewCharacterComponent } from './newCharacter/newCharacter.component';
import { ViewCharacterComponent } from './viewCharacter/viewCharacter.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: ':id', component: DashboardComponent },
  { path: ':id/player', component: PlayerDashComponent },
  { path: ':id/player/characters/new', component: NewCharacterComponent },
  { path: ':id/player/:cId/character', component: ViewCharacterComponent },
  { path: ':id/master',component: MasterDashComponent },
  { path: ':id/calendar', component: CalendarComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
