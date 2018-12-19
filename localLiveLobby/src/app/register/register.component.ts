import { Component, OnInit } from '@angular/core';
import { LobbyService } from '../lobby.service'

 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser: any
  errors: any
  errorMessage: string[]
  constructor(private _lobby: LobbyService) { }

  ngOnInit() {
    this.errorMessage = []
    this.newUser = {
      firstName : "",
      email: "",
      username: "",
      zipCode: "",
      password: "",
    }
  }
  register(){
    console.log(this.newUser)
    this._lobby.addUser(this.newUser).subscribe(data=>console.log(data))
    
  }
  validateForm(){
    this.errorMessage = []
    let email = new RegExp("^[a-zA-Z0-9._#$%*&+=]+\@[a-z0-9]+\.[a-z]{3}$")
    let zip = new RegExp('^[0-9]{5}$')
    if(this.newUser.firstName.length < 3){
      this.errorMessage.push("Names should be at least 3 characters long")
    }
    let emailRes = email.test(this.newUser.email)
    
    if(!emailRes){
      this.errorMessage.push('"'+this.newUser.email+'"'+" is not a valid email")}
    let zipRes = zip.test(this.newUser.zipCode)
    
    if(!zipRes){this.errorMessage.push("Please enter a 5-digit Zip code")}
    if(!this.newUser.password.length){
      this.errorMessage.push("please enter a password")}
    else if(this.newUser.password.length < 8){
      this.errorMessage.push("Passwords must be at least 8 characters long")
    
    }else if(this.newUser.password !== this.newUser.passwordConfirm){this.errorMessage.push("password and confirmation do not match")}
    if(!this.errorMessage.length){
      console.log("CHECKING FOR DUPLICATES")
      this._lobby.getUserByUsername(this.newUser.username).subscribe(data=>{
        if(data){this.errorMessage.push("A user with that username already exists")}
        
      })
      this._lobby.getUserByEmail(this.newUser.email).subscribe(data=>{
        if(data){this.errorMessage.push("A user with that email already exists")}
      })
      
    }
    if(!this.errorMessage.length){
      this.register()
    }
  }
}
