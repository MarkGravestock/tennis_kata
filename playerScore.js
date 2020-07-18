import {scores} from "./scores";

export class PlayerScore {

    #score

    constructor(initialScore = '0') {
        this.#score = scores.findIndex((element) => element === initialScore);
    }

    score() {
        return `${scores[this.#score]}`;
    }

    hasScoreLessThan(opponentScore) {
        return this.#score < scores.findIndex((element) => element === opponentScore);
    }

    winsPoint() {
        this.#score++;
    }

    loosesAdvantage() {
        this.#score--;
    }
}