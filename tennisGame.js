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
        if (this.hasWon(this.#server, this.#receiver)) {
            this.#serverWins = true;
        }

        TennisGame.#winPoint(this.#server, this.#receiver)
    }

    receiverWinsPoint() {
        if (this.hasWon(this.#receiver, this.#server)) {
            this.#receiverWon = true;
        }

        TennisGame.#winPoint(this.#receiver, this.#server)
    }

    hasWon(candidateWinner, opponent) {
        return this.hasWonWithScore(candidateWinner, opponent, '40') || this.hasWonWithScore(candidateWinner, opponent, 'A');
    }

    hasWonWithScore(candidateWinner, opponent, candidateScore) {
        return candidateWinner.score() === candidateScore && opponent.hasScoreLessThan(candidateScore)
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