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

  constructor(
    private router: Router,
    private matchDetails: MatchDetailsService
  ) { }

  ngOnInit(): void {
    this.match = this.matchDetails.getMatch();
    if(this.match == null) {
      this.router.navigate(['cricFeed']);
    }

    setInterval(function() {
      console.log("Yes I am being called!");
      
    }, 5000)
  }

  onBackClick() {
    this.router.navigate(['cricFeed']);
  }

}
