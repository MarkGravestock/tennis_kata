import {describe, expect, test} from "@jest/globals";
import {TennisGame} from "./tennisGame";

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

