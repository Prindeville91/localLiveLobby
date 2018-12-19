import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

  constructor(private _lobby: HttpClient) { }
  getUsers(){
    return this._lobby.get('/users')
  }
  getUserByID(userID: string){
    return this._lobby.get(`/users/id/${userID}`)
  }
  getUserByUsername(username: string){
    return this._lobby.get(`/users/name/${username}`)
  }
  getUserByEmail(email: string){
    return this._lobby.get(`/users/email/${email}`)
  }
  findUserByZip(zip: string){
    return this._lobby.get(`/users/${zip}`)
  }
  addUser(newUser){
    return this._lobby.post('/users', newUser)
  }
}
