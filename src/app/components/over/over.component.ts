import { Component, OnInit } from '@angular/core';
import { Match } from '../match-card/match-card.component';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-over',
  templateUrl: './over.component.html',
  styleUrls: ['./over.component.css']
})
export class OverComponent implements OnInit {

  maxCountOfBalls = 6;
  ballTypeList = ["Wkt","Wd","NB","LB","By","OT"];
  runTypeList = [0,1,2,3,4,5,6];
  // wicketTypeList = ["Run Out","LBW","Caught","Stump","Bowled","Caught & Bowled"];
  matchList : Match[] = [
    {id:1,team1 : "IND", team2 : "PAK", venue: "Dubai", status:"India Won the match by 2 wickets", team1Score : "136-8", team2Score:"135-8",matchNo:24,isMatchLive: true},
    {id:2,team1 : "AUS", team2 : "NZ", venue: "Abudhabi", status:"NZ Won the toss and chose to bat", team1Score : "-", team2Score:"-",matchNo:25,isMatchLive: false},
    {id:3,team1 : "SCO", team2 : "NAM", venue: "Sarjah", status:"NAM Won the match by 36 runs", team1Score : "122-8", team2Score:"158-8",matchNo:26,isMatchLive: false}
  ]

  currentMatch?:Match;
  matchId :number = 1;
  formValidity : boolean = false;
  currentBallScore:number=0;

  scoreForm : FormGroup = new FormGroup({
    ballType : new FormControl('',Validators.required),
    runScored : new FormControl('', Validators.required),
    // wicketType : new FormControl(null)
  })

  ballTypeVal = this.scoreForm.get('ballType');
  constructor(private _ActivatedRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(params => {
      this.matchId = Number(params.get('matchId'));
      console.log(this.matchId);
    });
  }

  updateScore(): void{
    console.log(this.scoreForm);
    console.log("Ball Type : " +this.scoreForm.get('ballType')?.value);
    console.log("Runs Scored : "+this.scoreForm.get('runScored')?.value);
    this.scoreForm.reset();
  }

  onChangeBallType():void{
    this.scoreForm.get('runScored')?.enable();
  }

  calculateScore():void{
    var score = 0;
    if(this.scoreForm.get('ballType')?.value === "NB" || this.scoreForm.get('ballType')?.value === "Wd"){
      score+=1;
    }
    score += Number(this.scoreForm.get('runScored')?.value);
    this.currentBallScore = score;
  }
}
