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
  getUsersByZip(zip: string){
    console.log("LOBBYU SERVICE")
    return this._lobby.get(`/users/zip/${zip}`)
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
    console.log("LOBBY SERVICE")
    return this._lobby.get(`/users/zip/${zip}`)
  }
  addUser(newUser){
    return this._lobby.post('/users', newUser)
  }
  login(cred){
    console.log(cred)
    return this._lobby.post('/login', cred)
  }

  getZipsByRadius(zip: string, rad: number){
    console.log(zip, rad)
    return this._lobby.get(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/FindZipCodesInRadius?zipcode=${zip}&minimumradius=0&maximumradius=${rad}&key=SNTL6WIJGRY6U2YYC3IP`)
  }
  createCharacter(newCharacter, id){
    return this._lobby.post('/createCharacter/'+id, newCharacter)

  }
  editAvailability(id: string, availability: any){
    console.log("LOBBY SERVICE TS")
    console.log(id, availability)
    return this._lobby.put(`/users/${id}`, availability)
  }
}
