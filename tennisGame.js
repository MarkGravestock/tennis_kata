import {PlayerScore} from "./playerScore";

export class TennisGame {

    #server;
    #receiver;
    #serverWins = false;

    constructor(serverScore = '0', receiverScore = '0') {

        this.#server = new PlayerScore(serverScore);
        this.#receiver = new PlayerScore(receiverScore);
    }

    score() {
        return `${this.#server.score()}:${this.#receiver.score()}`;
    }

    serverWinsPoint() {
        if (this.#server.score() === '40' && this.#receiver.hasScoreLessThan('40')) {
            this.#serverWins = true;
        }

        TennisGame.#winPoint(this.#server, this.#receiver)
    }

    receiverWinsPoint() {
        TennisGame.#winPoint(this.#receiver, this.#server)
    }

    static #winPoint(winner, loser) {
        if (loser.score() === 'A') {
            loser.loosesAdvantage();
        } else {
            winner.winsPoint();
        }
    }

    hasServerWon() {
        return this.#serverWins;
    }
}