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
    console.log("LOBBY SERVICE TS")
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
  login(cred){
    console.log(cred)
    return this._lobby.post('/login', cred)
  }
  createCharacter(newCharacter, id){
    return this._lobby.post('/createCharacter/'+id, newCharacter)
  }
  getAllCharacters(id){
    return this._lobby.get('/getAllCharacters/'+id)
  }
  getCharacter(id){
    return this._lobby.get('/getCharacter/'+id)
  }

  deleteCharacter(id) {
    return this._lobby.delete('/deleteCharacter/'+id)
  }

  removeCharacter(pId, cId) {
    return this._lobby.delete('/removeCharacter/'+pId+'/'+cId)
  }
}
