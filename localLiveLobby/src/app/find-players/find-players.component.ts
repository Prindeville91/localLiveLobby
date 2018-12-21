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
  codes : any
  radius: number
  user: any
  usernames : string []
  users: any []
  thisGuy: any
  zips : string []
  constructor(
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _lobby: LobbyService
  ) { }

  ngOnInit() {
    this.user = {}
    this.codes = {}
    this.usernames = []
    this.users = []
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
    
    this.zips = []
    if(this.radius){
    console.log(this.radius)
    this._lobby.getZipsByRadius(this.thisGuy.zipCode, this.radius).subscribe(data=>{
      
      this.codes = data
      for(var zip in this.codes.DataList){
        zip = this.codes.DataList[zip].Code
        this.zips.push(zip)
      }
      for(let zip in this.zips){
        
        this._lobby.findUserByZip(this.zips[zip]).subscribe(data=>{
          
          this.user = data
          for(let idx in this.user){
            this.users.push(this.user[idx])
          }
        })
      }
    })
    
    }
  }
}
