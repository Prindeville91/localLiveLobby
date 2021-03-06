import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, Params } from '@angular/router'

@Component({
  selector: 'app-master-dash',
  templateUrl: './master-dash.component.html',
  styleUrls: ['./master-dash.component.css']
})
export class MasterDashComponent implements OnInit {

  constructor(
    private _activatedroute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
  }
  backToDash(){
    this._activatedroute.params.subscribe(params=>{
      console.log(params)
      console.log("GO BACK")
      
      this._router.navigate([params.id])
    })
    
  }
}
