import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from 'src/app/Modal/Match';
import { MatchDetailsService } from 'src/app/Service/MatchDetails/match-details.service';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent implements OnInit {

  match!: Match
  matchLocation!: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private matchDetails: MatchDetailsService
  ) { }

  ngOnInit(): void {
    this.match = this.matchDetails.getMatch();
    if(this.match == null) {
      this.router.navigate(['cricFeed']);
    }

    setInterval(() => {
      console.log("Yes I am being called!");
      this.matchLocation = 'http://localhost:7002/cricfeed/getMatchByMatchId/'+this.match.matchId;
      this.httpClient.get(this.matchLocation).subscribe(res => {
        this.match = new Match(res);
      })
    }, 5000)
  }

  onBackClick() {
    this.router.navigate(['cricFeed']);
  }

}
