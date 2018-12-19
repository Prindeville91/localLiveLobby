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

  constructor(
    private _lobby: LobbyService,
    private _router: Router
    ) { }
  loginUser :any 
  user: any
  errors: any
  errorMessage: string[]
  ngOnInit() {
    this.user = {
      _id: ""
    }
    this.loginUser = {
      username : "",
      password: ""
    }
  }
 goHome(){
   this._router.navigate([''])
 }
  login(){
    let cred = {
      user:this.loginUser.username,
      pw: this.loginUser.password
    }
    console.log("LOGIN COMPONENT TS")
    this._lobby.login(cred).subscribe(data=>{
        this.user = data
    this._router.navigate([this.user._id])
    })

   
  }
}
