import { Component, OnInit } from '@angular/core';
import { LobbyService } from '../lobby.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newCharacter',
  templateUrl: './newCharacter.component.html',
  styleUrls: ['./newCharacter.component.css']
})
export class NewCharacterComponent implements OnInit {
  newCharacter: any;
  bIsError: Boolean;
  errors: any;
  allRaces: any;
  allClasses: any;

  constructor(
    private _lobby: LobbyService,
    private _router: Router,
    private _http: HttpClient
  ) { }

  ngOnInit() {
    this.reset();
    this.getRaces();
    this.getClasses();
  }

  reset() {
    this.newCharacter = {
      name: '',
      apperance: '',
      level: '',
      race: '',
      class: '',
      alignment: '',
      str: '',
      dex: '',
      int: '',
      wis: '',
      cha: '',
      role: '',
      description: ''
    }
    this.bIsError = false
    this.errors = []
    this.allRaces = ''
    this.allClasses = ''
  }

  setErrors(string) {
    this.bIsError = true;
    this.errors.push(string);
  }

  getRaces() {
    let observable = this._http.get('http://www.dnd5eapi.co/api/races');
    observable.subscribe(data => {
      this.allRaces = data
    })
  }
  getClasses() {
    let observable = this._http.get('http://www.dnd5eapi.co/api/classes');
    observable.subscribe(data => {
      console.log(data)
      this.allClasses = data
    })
  }


  validateCharacterForm() {
    this.bIsError = false
    this.errors = []
    console.log("On Create Character Submit")
    console.log(this.newCharacter);
    if (this.newCharacter.name == '') {
      this.setErrors("Name is needed   ");
    }
    if (this.newCharacter.apperance == '') {
      this.setErrors("Add a url that ends with jpeg   ")
    }
    if (this.newCharacter.level == '') {
      this.setErrors("Level is needed   ")
    }
    if (this.newCharacter.race == '') {
      this.setErrors("Race is needed   ")
    }
    if (this.newCharacter.class == '') {
      this.setErrors("Class is needed   ")
    }
    if (this.newCharacter.alignment == '') {
      this.setErrors("Alignment is needed   ")
    }
    if (this.newCharacter.str == '') {
      this.setErrors("Strength is needed   ")
    }
    if (this.newCharacter.dex == '') {
      this.setErrors("Detierity is needed   ")
    }
    if (this.newCharacter.con == '') {
      this.setErrors("Constitution is neded   ")
    }
    if (this.newCharacter.int == '') {
      this.setErrors("Intelligence is needed   ")
    }
    if (this.newCharacter.wis == '') {
      this.setErrors("Wisdom is needed   ")
    }
    if (this.newCharacter.cha == '') {
      this.setErrors("Charisma is needed   ")
    }
    if (this.newCharacter.role == '') {
      this.setErrors("Role is needed   ")
    }
    if (this.newCharacter.description == '') {
      this.setErrors("Description is needed   ")
    }
    if (this.bIsError == false) {
      console.log("NO ERRORS!!!!!")
      // let observable = this._lobby.createCharacter(this.newCharacter);
      // observable.subscribe(data => {
      //   console.log("Data returned:", data)
      // })
    }
  }

}
