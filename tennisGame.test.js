describe('Winning a Point Increases Score Correctly',() => {

    test('when a new game is started then the score is 0:0', () => {
        expect(new Game().score()).toBe("0:0");
    });


    test('when server wins the first point in a game then score is 15:0', () => {
        const game = new Game();
        game.serverWinsPoint();
        expect(game.score()).toBe("15:0");
    });

    test('given the score is 15:0 when receiver wins the next point then the score is 15:15', () => {
        const game = new Game();
        game.serverWinsPoint();
        game.receiverWinsPoint();
        expect(game.score()).toBe("15:15");
    });

    test('given the score is 15:15 when receiver wins the next point then the score is 15:30', () => {
        // Arrange / Given
        const game = new Game();
        game.serverWinsPoint();
        game.receiverWinsPoint();
        // Act / When
        game.receiverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("15:30");
    });

    test('given the score is initially 15:15 when receiver wins the next point then the score is 15:30', () => {
        // Arrange / Given
        const game = new Game(15, 15);
        // Act / When
        game.receiverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("15:30");
    });

    test('given the score is initially 30:30 when server wins the next point then the score is 40:30', () => {
        // Arrange / Given
        const game = new Game(30, 30);
        // Act / When
        game.serverWinsPoint();
        // Assert / Then
        expect(game.score()).toBe("40:30");
    });
})

const scores = [0, 15, 30 ,40];

class Game {

    #server = new PlayerScore();
    #receiverScore = 0;

    constructor(serverScore = 0, receiverScore = 0) {

        this.#server = new PlayerScore(serverScore);
        this.#receiverScore = scores.findIndex((element) => element === receiverScore);
    }

    score() {
        return `${this.#server.score()}:${scores[this.#receiverScore]}`;
    }

    serverWinsPoint() {
        this.#server.winsPoint();
    }

    receiverWinsPoint() {
        this.#receiverScore = this.#receiverScore + 1;
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
