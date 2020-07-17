import {scores} from "./scores";

export class PlayerScore {

    #score

    constructor(initialScore = '0') {
        this.#score = scores.findIndex((element) => element === initialScore);
    }

    score() {
        return `${scores[this.#score]}`;
    }

    winsPoint() {
        this.#score++;
    }

    loosesPoint() {
        this.#score--;
    }
}