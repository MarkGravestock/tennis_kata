import {scores} from "./scores";

export class PlayerScore {

    constructor(initialScore = 0) {
        this.score = scores.findIndex((element) => element === initialScore);
    }

    score() {
        return `${scores[this.score]}`;
    }

    winsPoint() {
        this.score = this.score + 1;
    }
}