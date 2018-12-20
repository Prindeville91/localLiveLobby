import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router'
import { LobbyService } from '../lobby.service';
@Component({
  selector: 'app-player-dash',
  templateUrl: './player-dash.component.html',
  styleUrls: ['./player-dash.component.css']
})
export class PlayerDashComponent implements OnInit {
  id: any;
  allCharcters: any;
  bIsCharacter: Boolean;
  constructor(
    private _route: ActivatedRoute,
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _lobby: LobbyService
  ) { }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params.id
    })
    console.log("reset")
    this.getAllCharacters()
    this.bIsCharacter = false
    this.allCharcters = [{
      name: '',
      id: ''
    }]
  }

  backToDash() {
    this._activatedroute.params.subscribe(params => {
      console.log(params)
      console.log("GO BACK")
      this._router.navigate([params.id])
    })
  }

  viewCharacterSheet(cId) {
    this._activatedroute.params.subscribe(params => {
      console.log(params.id)
      this._router.navigate([params.id+'/player/'+cId+'/character/'])
    })
  }

  getAllCharacters() {
    let observable = this._lobby.getAllCharacters(this.id);
    observable.subscribe(data => {
      console.log("Data found:", data.characters)
      this.isThereCharacters(data.characters)
    })
  }

  isThereCharacters(characters){
    if(characters == []){
      this.bIsCharacter = false
    } else {
      this.bIsCharacter = true
      this.getCharacter(characters)
    }
  }
  getCharacter(characters) {
    console.log(characters)
    for (let i = 0; i < characters.length; i++) {
      console.log(characters[i])
      let observable = this._lobby.getCharacter(characters[i]);
      observable.subscribe(data => {
        this.allCharcters[i] = data
        console.log("All chacarters: ", this.allCharcters)
      })
    }
  }
}
