import { Injectable } from '@angular/core';
import { Match } from 'src/app/Modal/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchDetailsService {

  private match!: Match

  constructor() { }

  public getMatch() {
    return this.match;
  }

  public setMatch(match: any) {
    this.match = match;
  }
}
