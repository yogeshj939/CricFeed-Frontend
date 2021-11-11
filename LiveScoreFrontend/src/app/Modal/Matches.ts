import { Match } from "./Match";

export class Matches {
    matches!: Match[];

    constructor(data: any) {
        if(data) {
            this.matches = []
            data.matches.forEach((m: any) => {
                this.matches.push(new Match(m));
            });
        }
    }
}