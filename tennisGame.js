import {PlayerScore} from "./playerScore";

export class TennisGame {

    #server;
    #receiver;
    
    constructor(serverScore = '0', receiverScore = '0') {

        this.#server = new PlayerScore(serverScore);
        this.#receiver = new PlayerScore(receiverScore);
    }

    score() {
        return `${this.#server.score()}:${this.#receiver.score()}`;
    }

    serverWinsPoint() {
        if (this.#receiver.score() === 'A') {
            this.#receiver.loosesAdvantage();
        } else {
            this.#server.winsPoint();
        }
    }

    receiverWinsPoint() {
        if (this.#server.score() === 'A') {
            this.#server.loosesAdvantage();
        } else {
            this.#receiver.winsPoint();
        }
    }
}