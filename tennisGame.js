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
        if (this.#server.score() === '40' && this.#receiver.hasScoreLessThan('40') || this.#server.score() === 'A' && this.#receiver.hasScoreLessThan('A')) {
            this.#serverWins = true;
        }

        TennisGame.#winPoint(this.#server, this.#receiver)
    }

    receiverWinsPoint() {
        if (this.#receiver.score() === 'A' && this.#server.hasScoreLessThan('A')) {
            this.#receiverWon = true;
        }

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

    #receiverWon = false;

    hasReceiverWon() {
        return this.#receiverWon;
    }
}