import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component' 
import { DashboardComponent } from './dashboard/dashboard.component'
import { MasterDashComponent } from './master-dash/master-dash.component'
import { PlayerDashComponent } from './player-dash/player-dash.component'
import { RegisterComponent } from './register/register.component'
import { LoginComponent } from './login/login.component'
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'
import { FindPlayersComponent } from './find-players/find-players.component'
import { ViewUserComponent } from './view-user/view-user.component'


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'view/:user', component: ViewUserComponent },
  { path: ':id/master/findPlayers', component: FindPlayersComponent },
  { path: 'register', component: RegisterComponent },
  { path: ':id', component: DashboardComponent },
  { path: ':id/player', component: PlayerDashComponent },
  { path: ':id/master',component: MasterDashComponent},
  { path: ':id/calendar', component: CalendarComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
