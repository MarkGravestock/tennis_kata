test('when a new game is started then the score is 0:0', () => {
    expect(new Game().score()).toBe("0:0");
});


test('when server wins the first point in a game then score is 15:0', () => {
    const game = new Game();
    game.serverWins();
    expect(game.score()).toBe("15:0");
});

test('given the score is 15:0 when receiver wins the next point then the score is 15:15', () => {
    const game = new Game();
    game.serverWins();
    game.receiverWins();
    expect(game.score()).toBe("15:15");
});

test('given the score is 15:15 when receiver wins the next point then the score is 15:30', () => {
    // Arrange / Given
    const game = new Game();
    game.serverWins();
    game.receiverWins();
    // Act / When
    game.receiverWins();
    // Assert / Then
    expect(game.score()).toBe("15:30");
});

test('given the score is initially 15:15 when receiver wins the next point then the score is 15:30', () => {
    // Arrange / Given
    const game = new Game(15, 15);
    // Act / When
    game.receiverWins();
    // Assert / Then
    expect(game.score()).toBe("15:30");
});

/*test('i can\'t see internalScore', () => {
    const game = new Game();
    expect(game.#score).toBe("0:0");
});*/

class Game
{
    #serverScore = 0;
    #receiverScore = 0;

    constructor(serverScore = 0, receiverScore = 0) {
        this.#serverScore = serverScore;
        this.#receiverScore = receiverScore;
    }

    score() {
        return `${this.#serverScore}:${this.#receiverScore}`;
    }

    serverWins() {
        this.#serverScore = this.#serverScore + 15;
    }

    receiverWins() {
        this.#receiverScore = this.#receiverScore + 15;
    }
}