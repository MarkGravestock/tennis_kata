test('when a new game is started then the score is 0:0', () => {
    expect(new Game().score()).toBe("0:0");
});

/*
test('when server wins the score is 15:0', () => {
    expect(score(1, 2)).toBe(3);
});
 */

class Game
{
    score() {
        return "0:0";
    }
}