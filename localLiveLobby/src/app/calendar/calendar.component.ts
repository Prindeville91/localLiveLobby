import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router'
import { LobbyService } from '../lobby.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  data : any
  seeMon : boolean
  seeTue : boolean
  seeWed : boolean
  seeThr : boolean
  seeFri : boolean
  seeSat : boolean
  seeSun : boolean
  id : string
 

  constructor(
    private _activatedroute: ActivatedRoute,
    private _router: Router,
    private _lobby: LobbyService
  ) { } 
  ngOnInit() {
    this.data = {}
    this._activatedroute.params.subscribe(params=>this.id = params.id)
    this._lobby.getUserByID(this.id).subscribe(data=>{
      this.data = data
      console.log(this.data)

    })
    this.seeMon = false,
    this.seeTue = false,
    this.seeWed = false,
    this.seeThr = false,
    this.seeFri = false,
    this.seeSat = false,
    this.seeSun = false
  }
  toggleMon(){
    if(this.seeMon == false){this.seeMon = true}
    else {this.seeMon = false}

    this.seeTue = false
    this.seeWed = false
    this.seeThr = false
    this.seeFri = false
    this.seeSat = false
    this.seeSun = false
      
  }
  toggleTue(){
    if(!this.seeTue){this.seeTue = true}
    else{this.seeTue = false}
    this.seeMon = false
  
    this.seeWed = false
    this.seeThr = false
    this.seeFri = false
    this.seeSat = false
    this.seeSun = false
  }
  toggleWed(){
    if(!this.seeWed){this.seeWed = true}
    else {this.seeWed = false}
    this.seeMon = false
    this.seeTue = false

    this.seeThr = false
    this.seeFri = false
    this.seeSat = false
    this.seeSun = false
  }
  toggleThr(){
    if(!this.seeThr){this.seeThr = true}
    else {this.seeThr = false}
    this.seeMon = false
    this.seeTue = false
    this.seeWed = false

    this.seeFri = false
    this.seeSat = false
    this.seeSun = false
     
  }
  toggleFri(){
    if(!this.seeFri){this.seeFri = true}
    else {this.seeFri = false}
    this.seeMon = false
    this.seeTue = false
    this.seeWed = false
    this.seeThr = false

    this.seeSat = false
    this.seeSun = false
    
     
  }
  toggleSat(){
    if(!this.seeSat){this.seeSat = true}
    else {this.seeSat = false}
    this.seeMon = false
    this.seeTue = false
    this.seeWed = false
    this.seeThr = false
    this.seeFri = false

    this.seeSun = false
      
  } 
  toggleSun(){
    if(!this.seeSun){this.seeSun = true}
    else {this.seeSun = false}
    this.seeMon = false
    this.seeTue = false
    this.seeWed = false
    this.seeThr = false
    this.seeFri = false
    this.seeSat = false

  }
  monMorn(){
    if(this.data.availability.monday.morning){
      this.data.availability.monday.morning = false
    }
    else{this.data.availability.monday.morning = true}
  }
  monDay(){
    if(this.data.availability.monday.day){
      this.data.availability.monday.day = false
    }
    else{this.data.availability.monday.day = true}
  }
  monANoon(){
    if(this.data.availability.monday.afternoon){
      this.data.availability.monday.afternoon = false
    }
    else{this.data.availability.monday.afternoon = true}
  }
  monEve(){
    if(this.data.availability.monday.evening){
      this.data.availability.monday.evening = false
    }
    else{this.data.availability.monday.evening = true}
  }
  monNight(){
    if(this.data.availability.monday.night){
      this.data.availability.monday.night = false
    }
    else{this.data.availability.monday.night = true}
  }
  tueMorn(){
    if(this.data.availability.tuesday.morning){
      this.data.availability.tuesday.morning = false
    }
    else{this.data.availability.tuesday.morning = true}
  }
  tueDay(){
    if(this.data.availability.tuesday.day){
      this.data.availability.tuesday.day = false
    }
    else{this.data.availability.tuesday.day = true}
  }
  tueANoon(){
    if(this.data.availability.tuesday.afternoon){
      this.data.availability.tuesday.afternoon = false
    }
    else{this.data.availability.tuesday.afternoon = true}
  }
  tueEve(){
    if(this.data.availability.tuesday.evening){
      this.data.availability.tuesday.evening = false
    }
    else{this.data.availability.tuesday.evening = true}
  }
  tueNight(){
    if(this.data.availability.tuesday.night){
      this.data.availability.tuesday.night = false
    }
    else{this.data.availability.tuesday.night = true}
  }
  wedMorn(){
    if(this.data.availability.wednesday.morning){
      this.data.availability.wednesday.morning = false
    }
    else{this.data.availability.wednesday.morning = true}
  }
  wedDay(){
    if(this.data.availability.wednesday.day){
      this.data.availability.wednesday.day = false
    }
    else{this.data.availability.wednesday.day = true}
  }
  wedANoon(){
    if(this.data.availability.wednesday.afternoon){
      this.data.availability.wednesday.afternoon = false
    }
    else{this.data.availability.wednesday.afternoon = true}
  }
  wedEve(){
    if(this.data.availability.wednesday.evening){
      this.data.availability.wednesday.evening = false
    }
    else{this.data.availability.wednesday.evening = true}
  }
  wedNight(){
    if(this.data.availability.wednesday.night){
      this.data.availability.wednesday.night = false
    }
    else{this.data.availability.wednesday.night = true}
  }
  thrMorn(){
    if(this.data.availability.thursday.morning){
      this.data.availability.thursday.morning = false
    }
    else{this.data.availability.thursday.morning = true}
  }
  thrDay(){
    if(this.data.availability.thursday.day){
      this.data.availability.thursday.day = false
    }
    else{this.data.availability.thursday.day = true}
  }
  thrANoon(){
    if(this.data.availability.thursday.afternoon){
      this.data.availability.thursday.afternoon = false
    }
    else{this.data.availability.thursday.afternoon = true}
  }
  thrEve(){
    if(this.data.availability.thursday.evening){
      this.data.availability.thursday.evening = false
    }
    else{this.data.availability.thursday.evening = true}
  }
  thrNight(){
    if(this.data.availability.thursday.night){
      this.data.availability.thursday.night = false
    }
    else{this.data.availability.thursday.night = true}
  }
  friMorn(){
    if(this.data.availability.friday.morning){
      this.data.availability.friday.morning = false
    }
    else{this.data.availability.friday.morning = true}
  }
  friDay(){
    if(this.data.availability.friday.day){
      this.data.availability.friday.day = false
    }
    else{this.data.availability.friday.day = true}
  }
  friANoon(){
    if(this.data.availability.friday.afternoon){
      this.data.availability.friday.afternoon = false
    }
    else{this.data.availability.friday.afternoon = true}
  }
  friEve(){
    if(this.data.availability.friday.evening){
      this.data.availability.friday.evening = false
    }
    else{this.data.availability.friday.evening = true}
  }
  friNight(){
    if(this.data.availability.friday.night){
      this.data.availability.friday.night = false
    }
    else{this.data.availability.friday.night = true}
  }
  satMorn(){
    if(this.data.availability.saturday.morning){
      this.data.availability.saturday.morning = false
    }
    else{this.data.availability.saturday.morning = true}
  }
  satDay(){
    if(this.data.availability.saturday.day){
      this.data.availability.saturday.day = false
    }
    else{this.data.availability.saturday.day = true}
  }
  satANoon(){
    if(this.data.availability.saturday.afternoon){
      this.data.availability.saturday.afternoon = false
    }
    else{this.data.availability.saturday.afternoon = true}
  }
  satEve(){
    if(this.data.availability.saturday.evening){
      this.data.availability.saturday.evening = false
    }
    else{this.data.availability.saturday.evening = true}
  }
  satNight(){
    if(this.data.availability.saturday.night){
      this.data.availability.saturday.night = false
    }
    else{this.data.availability.saturday.night = true}
  }
  sunMorn(){
    if(this.data.availability.sunday.morning){
      this.data.availability.sunday.morning = false
    }
    else{this.data.availability.sunday.morning = true}
  }
  sunDay(){
    if(this.data.availability.sunday.day){
      this.data.availability.sunday.day = false
    }
    else{this.data.availability.sunday.day = true}
  }
  sunANoon(){
    if(this.data.availability.sunday.afternoon){
      this.data.availability.sunday.afternoon = false
    }
    else{this.data.availability.sunday.afternoon = true}
  }
  sunEve(){
    if(this.data.availability.sunday.evening){
      this.data.availability.sunday.evening = false
    }
    else{this.data.availability.sunday.evening = true}
  }
  sunNight(){
    if(this.data.availability.sunday.night){
      this.data.availability.sunday.night = false
    }
    else{this.data.availability.sunday.night = true}
  }
  submitForm(){
    console.log(this.id, this.data.availability)
    
    this._lobby.editAvailability(this.id, this.data.availability).subscribe(data=>{console.log(data)})
  }
}
