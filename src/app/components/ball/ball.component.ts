import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  ballTypeList = ["Normal","Wide","No ball","Leg Byes","Byes","overthrow"];
  runTypeList = [0,1,2,3,4,5,6];

  constructor() { }

  ngOnInit(): void {
  }

}
