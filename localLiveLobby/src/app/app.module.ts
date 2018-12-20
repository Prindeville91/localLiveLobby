import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerDashComponent } from './player-dash/player-dash.component';
import { MasterDashComponent } from './master-dash/master-dash.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http'

import { LobbyService } from './lobby.service';
import { NewCampaignComponent } from './new-campaign/new-campaign.component';
import { FindPlayersComponent } from './find-players/find-players.component'
import { NewCharacterComponent } from './newCharacter/newCharacter.component';
import { ViewUserComponent } from './view-user/view-user.component'

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayerDashComponent,
    MasterDashComponent,
    CalendarComponent,
    LoginComponent,
    RegisterComponent,
    PagenotfoundComponent,
    NewCampaignComponent,
    FindPlayersComponent,
     NewCharacterComponent,
     ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [LobbyService],
  bootstrap: [AppComponent]

})
export class AppModule { }
