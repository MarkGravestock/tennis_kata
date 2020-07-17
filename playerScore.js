import {scores} from "./scores";

export class PlayerScore {

    constructor(initialScore = 0) {
        this._score = scores.findIndex((element) => element === initialScore);
    }

    score() {
        return `${scores[this._score]}`;
    }

    winsPoint() {
        this._score = this._score + 1;
    }
}