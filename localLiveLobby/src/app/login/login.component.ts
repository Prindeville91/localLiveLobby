import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { LobbyService } from '../lobby.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _lobby: LobbyService) { }
  loginUser :any 
  errors: any
  errorMessage: string[]
  ngOnInit() {
    this.loginUser = {
      username : "",
      password: ""
    }
  }
  try(){
    console.log(this.loginUser)
    this.login()
    console.log("post try")
  }
  login(){
    
    this._lobby.getUserByUsername(this.loginUser.username).subscribe(data=>{
     console.log(data)
    })

   
  }
}
