//import {describe, expect, test} from "@jest/globals";

const scores = [0, 15, 30, 40];

describe('Winning a Point Increases Score Correctly',() => {

    test('when a new game is started then the score is 0:0', () => {
        expect(new TennisGame().score()).toBe("0:0");
    });


    test('when server wins the first point in a game then score is 15:0', () => {
        const game = new TennisGame();
        game.serverWinsPoint();
        expect(game.score()).toBe("15:0");
    });

    test('given the score is 15:0 when receiver wins the next point then the score is 15:15', () => {
        const game = new TennisGame();
        game.serverWinsPoint();
        game.receiverWinsPoint();
        expect(game.score()).toBe("15:15");
    });

    test('given the score is 15:15 when receiver wins the next point then the score is 15:30', () => {
        // Arrange / Given
        const game = new TennisGame();
        game.serverWinsPoint();
        game.receiverWinsPoint();
        // Act / When
        game.receiverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("15:30");
    });

    test('given the score is initially 15:15 when receiver wins the next point then the score is 15:30', () => {
        // Arrange / Given
        const game = new TennisGame(15, 15);
        // Act / When
        game.receiverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("15:30");
    });

    test('given the score is initially 30:30 when server wins the next point then the score is 40:30', () => {
        // Arrange / Given
        const game = new TennisGame(30, 30);
        // Act / When
        game.serverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("40:30");
    });
})

class TennisGame {

    #server = new PlayerScore();
    #receiver = new PlayerScore()

    constructor(serverScore = 0, receiverScore = 0) {

        this.#server = new PlayerScore(serverScore);
        this.#receiver = new PlayerScore(receiverScore);
    }

    score() {
        return `${this.#server.score()}:${this.#receiver.score()}`;
    }

    serverWinsPoint() {
        this.#server.winsPoint();
    }

    receiverWinsPoint() {
        this.#receiver.winsPoint();
    }
}

class PlayerScore {
    #score = 0;

    constructor(initialScore = 0) {
        this.#score = scores.findIndex((element) => element === initialScore);
    }

    score() {
        return `${scores[this.#score]}`;
    }

    winsPoint() {
        this.#score = this.#score + 1;
    }
}
