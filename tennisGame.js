import {PlayerScore} from "./playerScore";

export class TennisGame {

    constructor(serverScore = 0, receiverScore = 0) {

        this.server = new PlayerScore(serverScore);
        this.receiver = new PlayerScore(receiverScore);
    }

    score() {
        return `${this.server.score()}:${this.receiver.score()}`;
    }

    serverWinsPoint() {
        this.server.winsPoint();
    }

    receiverWinsPoint() {
        this.receiver.winsPoint();
    }
}