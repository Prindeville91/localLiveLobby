import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router'
import { LobbyService } from '../lobby.service';


@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: string
  table: any
  truthiness : boolean
  availability : any
  constructor(
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _lobby: LobbyService
  ) { }
  ngOnInit() {
    this.user = ""
    this.table = {}
    this.availability = {}
    this.truthiness = true
    this._activatedroute.params.subscribe(params=>{
      console.log(params.user)
      this.user = params.user
    })
    this._lobby.getUserByUsername(this.user).subscribe(data=>{
      this.table = data
      this.availability = this.table[0].availability
      console.log(this.availability)})
  }
  populateUser(){

  }
}
