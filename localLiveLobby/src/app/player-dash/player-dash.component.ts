import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router'
@Component({
  selector: 'app-player-dash',
  templateUrl: './player-dash.component.html',
  styleUrls: ['./player-dash.component.css']
})
export class PlayerDashComponent implements OnInit {
  id: any;
  constructor(
    private _route: ActivatedRoute,
    private _activatedroute: ActivatedRoute,
    private _router: Router
  ) { }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params.id
    })
  }

  backToDash(){
    this._activatedroute.params.subscribe(params=>{
      console.log(params)
      console.log("GO BACK")
      
      this._router.navigate([params.id])
    })
    
  }
}
