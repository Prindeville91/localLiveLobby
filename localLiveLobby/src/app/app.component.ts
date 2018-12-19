import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LobbyService } from './lobby.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'the Party';
  
  constructor(
    private _router : Router,
    private _shelterService: LobbyService){

  }
  ngOnInit(){
    console.log("LETS RRRROLL")
    
  }
}

