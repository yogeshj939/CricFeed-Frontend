import { Team } from "./Team";

export class Innings {

    team!: Team
    inningNo!: number;
    teamScores!: number;
    teamWickets!: number;
    teamOver!: number;
    ballNo!: number;
    inningExtra!: number;

    constructor(data: any) {
        if(data) {
            this.team = data.team;
            this.inningNo = data.inningNo;
            this.teamScores = data.teamScores;
            this.teamWickets = data.teamWickets;
            this.teamOver = data.teamOver;
            this.ballNo = data.ballNo;
            this.inningExtra = data.inningExtra;
        }
    }

}