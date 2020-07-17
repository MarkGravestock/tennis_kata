import {PlayerScore} from "./playerScore";

export class TennisGame {

    constructor(serverScore = 0, receiverScore = 0) {

        this._server = new PlayerScore(serverScore);
        this._receiver = new PlayerScore(receiverScore);
    }

    score() {
        return `${this._server.score()}:${this._receiver.score()}`;
    }

    serverWinsPoint() {
        this._server.winsPoint();
    }

    receiverWinsPoint() {
        this._receiver.winsPoint();
    }
}