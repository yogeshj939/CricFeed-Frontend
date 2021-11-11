import { Component, OnInit } from '@angular/core';


export interface Match{
  team1 : string,
  team2 : string,
  venue : string,
  status : string,
  team1Score : string,
  team2Score : string,
  matchNo : number
}

@Component({
  selector: 'app-match-card',
  templateUrl: './match-card.component.html',
  styleUrls: ['./match-card.component.css']
})
export class MatchCardComponent implements OnInit {

  matchList : Match[] = [
    {team1 : "IND", team2 : "PAK", venue: "Dubai", status:"India Won the match by 2 wickets", team1Score : "136-8", team2Score:"135-8",matchNo:24},
    {team1 : "AUS", team2 : "NZ", venue: "Abudhabi", status:"NZ Won the toss and chose to bat", team1Score : "-", team2Score:"-",matchNo:25},
    {team1 : "SCO", team2 : "NAM", venue: "Sarjah", status:"NAM Won the match by 36 runs", team1Score : "122-8", team2Score:"158-8",matchNo:26}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

