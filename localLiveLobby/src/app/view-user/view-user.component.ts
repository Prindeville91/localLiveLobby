import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router'

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  user: string
  constructor(
    private _activatedroute: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this.user = ""
    this._activatedroute.params.subscribe(params=>{
      console.log(params.user)
      this.user = params.user
    })
  }
  populateUser(){

  }
}
