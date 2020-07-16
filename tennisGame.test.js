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
    const game = new Game();
    game.serverWins();
    game.receiverWins();
    game.receiverWins();
    expect(game.score()).toBe("15:30");
});

/*test('i can\'t see internalScore', () => {
    const game = new Game();
    expect(game.#score).toBe("0:0");
});*/

class Game
{
    #score = "0:0";

    score() {
        return this.#score;
    }

    serverWins() {
        this.#score = "15:0"
    }

    receiverWins() {
        if (this.#score === "15:15") {
            this.#score = "15:30";
            return;
        }

        this.#score = "15:15"
    }
}