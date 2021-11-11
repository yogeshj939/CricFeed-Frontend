import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BallComponent } from '../ball/ball.component';

@Component({
  selector: 'app-over',
  templateUrl: './over.component.html',
  styleUrls: ['./over.component.css']
})
export class OverComponent implements OnInit {

  countOfBalls = 6;
  ballsOfOver : Ball[];

  constructor(public dialog: MatDialog) {
    this.ballsOfOver = [new Ball(null,null,null)]
  }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(BallComponent,{
      width:"30%"
    })
  }

}

class Ball{
  ballType : any;
  runs : any;
  commentry : any;

  constructor(balltype:any, runs:any, commentry:any){
    this.ballType = balltype;
    this.runs = runs;
    this.commentry = commentry;
  }
}
