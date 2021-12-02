import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ADMIN, BASE_URL, SCORECARD, UPDATE_SCORE } from '../cricfeed.constants';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Ball } from '../models/ball';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private SCORECARD_URL = BASE_URL+ADMIN+SCORECARD;
  private UPDATE_SCORE_URL = BASE_URL+ADMIN+UPDATE_SCORE;

  constructor(private http: HttpClient) { }

  getMatches(){
    return this.http.get(this.SCORECARD_URL).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  postScore(ball : Ball){
    return this.http.post(this.UPDATE_SCORE_URL, ball).pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    console.log(error.statusText);
    return Observable.throw(error.statusText);
  }
}
