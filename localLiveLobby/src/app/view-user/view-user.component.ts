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
  id: any;
  characters : any []
  temp : any
  table: any
  truthiness : boolean
  availability : any
  constructor(
    private _route: ActivatedRoute,
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _lobby: LobbyService
  ) { }
  ngOnInit() {
    this.characters = []
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
      this.getChars()
      })
      
  }

  getChars(){
    console.log(this.table[0].characters)
    for(let char of this.table[0].characters){
      console.log(char)
      this._lobby.getCharacter(char).subscribe(data=>{
        this.temp = data
        this.characters.push(this.temp)
      })
    }
  }
  viewCharacterSheet(cId) {
    this._activatedroute.params.subscribe(params => {
      console.log(params.id)
      this._router.navigate([params.id+'/player/'+cId+'/character/'])
    })
  }
}
