export class Match {
    match_id!: number;
    matchType_Name!: string;
    teamAName!: string;
    teamBName!: string;
    battingTeamName!: string;
    matchPosition!: string;
    matchAt!: string;
    matchStatus!: string;
    teamAScore!: number;
    teamAWickets!: number;
    teamAOvers!: number;
    teamBScore!: number;
    teamBWickets!: number;
    teamBOvers!: number;

    constructor(data: any) {
        if(data) {
            this.match_id = data.match_id;
            this.matchType_Name = data.matchType_Name;
            this.teamAName = data.teamAName;
            this.teamBName = data.teamBName;
            this.battingTeamName = data.battingTeamName;
            this.matchPosition = data.matchPosition;
            this.matchAt = data.matchAt;
            this.matchStatus = data.matchStatus;
            this.teamAScore = data.teamAScore;
            this.teamBScore = data.teamBScore;
            this.teamAWickets = data.teamAWickets;
            this.teamBWickets = data.teamBWickets;
            this.teamAOvers = data.teamAOvers;
            this.teamBOvers = data.teamBOvers;

        }
    }
}