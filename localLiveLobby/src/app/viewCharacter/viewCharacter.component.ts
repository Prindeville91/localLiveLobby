import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router'
import { LobbyService } from '../lobby.service';
import { resetComponentState } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-viewCharacter',
  templateUrl: './viewCharacter.component.html',
  styleUrls: ['./viewCharacter.component.css']
})
export class ViewCharacterComponent implements OnInit {
  pId: any;
  cId: any;
  currentCharacter: any;

  constructor(
    private _route: ActivatedRoute,
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _lobby: LobbyService
  ) { }

  ngOnInit() {
    console.log("View init")
    this._route.params.subscribe((params: Params) => {
      this.cId = params.cId
      this.pId = params.id
      this.getCharacter()
      this.reset()
    })
  }
  reset() {
    this.currentCharacter = {
      _id: '',
      name: '',
      apperance: '',
      class: '',
      race: '',
      alignment: '',
      str: '',
      dex: '',
      int: '',
      wis: '',
      cha: '',
      con: '',
      role: '', 
      description: ''
    }
  }
  backToPlayerDash() {
    this._activatedroute.params.subscribe(params => {
      console.log(params)
      console.log("GO BACK")
      this._router.navigate([params.id+"/player"])
    })
  }

  getCharacter() {
    console.log(this.cId)
    let observable = this._lobby.getCharacter(this.cId);
    observable.subscribe(data => {
      console.log("Data found:", data)
      this.currentCharacter = data
    })
  }

  deleteCharacter() {
    console.log(this.cId)
    let observable = this._lobby.deleteCharacter(this.cId);
    observable.subscribe(data => {
      console.log("Data found:",data)
      if(data.message == "Successfully deleted character") {
        let observable = this._lobby.removeCharacter(this.pId, this.cId);
        observable.subscribe(data => {
          console.log("Data found:", data)
        })
      }
    })
  }
}
