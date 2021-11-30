import { Innings } from "./Innings";
import { Team } from "./Team";

export class Match {
    
    matchId!: number;
    seriesName!: string;
	teamA!: Team;
	teamB!: Team;
	isMatchLive!: boolean;
	scheduledDate!: string;
	creationDate!: string;
	matchType!: string;
	tossWonByTeam!: Team;
	matchStatus!: string;
    innings!: Innings[];
	matchWonByTeam!: Team;

    constructor(data: any) {
        if(data) {
            this.matchId = data.matchId;
            this.seriesName = data.seriesName;
            this.teamA = data.teamA;
            this.teamB = data.teamB;
            this.isMatchLive = data.matchLive;
            this.scheduledDate = data.scheduledDate;
            this.creationDate = data.creationDate;
            this.matchType = data.matchType;
            this.tossWonByTeam = data.tossWonByTeam;
            this.matchStatus = data.matchStatus;
            this.innings = data.innings;
            this.matchWonByTeam = data.matchWonByTeam;
        }
    }
}