import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Match } from 'src/app/Modal/Match';
import { Matches } from 'src/app/Modal/Matches';
import { MatchDetailsService } from 'src/app/Service/MatchDetails/match-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  matches: Matches = new Matches(null)
  matchesLocation!: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private matchDeatils: MatchDetailsService
  ) { }

  ngOnInit(): void {
    this.matchDeatils.setMatch(null);
    this.matchesLocation = 'data/matches.json';
    this.httpClient.get(this.matchesLocation).subscribe(res => {
      this.matches = new Matches(res);
    })
  }

  giveDetail(match: any) {
    console.log(match);
    this.matchDeatils.setMatch(match)
    this.router.navigate(['matchDetail'])
  }

  get getMatches() {
    return this.matches.matches;
  }

}
