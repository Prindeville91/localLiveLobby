import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router'
import { LobbyService } from '../lobby.service';
@Component({
  selector: 'app-find-players',
  templateUrl: './find-players.component.html',
  styleUrls: ['./find-players.component.css']
})
export class FindPlayersComponent implements OnInit {
  masterID : string
  radius: number
  thisGuy: any
  zips : string []
  constructor(
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _lobby: LobbyService
  ) { }

  ngOnInit() {
    this.thisGuy = {}
    this.zips = []
    this._activatedroute.params.subscribe(params=>{
    this.masterID = params.id})
    
    this._lobby.getUserByID(this.masterID).subscribe(data=>{
      this.thisGuy = data
      
    }
      )
  }
  findPlayers(){
    if(this.radius){
    console.log(this.radius)
    this._lobby.getZipsByRadius(this.thisGuy.zipCode, this.radius).subscribe(data=>console.log(data))
    }
  }
}
