import {describe, expect, test} from "@jest/globals";
import {TennisGame} from "./tennisGame";
import {PlayerScore} from "./playerScore";

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
        const game = new TennisGame("15", "15");
        // Act / When
        game.receiverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("15:30");
    });

    test('given the score is initially 30:30 when server wins the next point then the score is 40:30', () => {
        // Arrange / Given
        const game = new TennisGame("30", "30");
        // Act / When
        game.serverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("40:30");
    });
})

describe('Deuce and Advantage are Scored Correctly', () => {
    test('Given the score is 40:40 when the receiver wins a point then the score should be 40:A', () => {
        const game = new TennisGame("40", "40");
        // Act / When
        game.receiverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("40:A");
    })

    test('Given the score is A:40 when the receiver wins a point then the score should be 40:40', () => {
        const game = new TennisGame("A", "40");
        // Act / When
        game.receiverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("40:40");
    })

    test('Given the score is 40:A when the server wins a point then the score should be 40:40', () => {
        const game = new TennisGame("40", "A");
        // Act / When
        game.serverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("40:40");
    })
})

describe('Winning Points are Scored Correctly', () => {
    test('Given the score is 40:30 When the server wins a point then the server should win', () => {
        const game = new TennisGame("40", "30");
        // Act / When
        game.serverWinsPoint();
        // Assert / Then
        expect(game.hasServerWon()).toBe(true);
    })

    test('Player score can check it is less than a given score', () => {
        const score = new PlayerScore('30');

        expect(score.hasScoreLessThan('40')).toBe(true);

    })
    }
)

// A:A is invalid initial score