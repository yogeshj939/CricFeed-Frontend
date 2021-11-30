export class Team {
    teamName!: string;
    teamCode!: string;

    constructor(data: any) {
        if(data) {
            this.teamName = data.teamName;
            this.teamCode = data.teamCode;
        }
    }
}