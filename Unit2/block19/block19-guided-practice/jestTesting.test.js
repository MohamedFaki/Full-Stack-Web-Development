const {LuckyNumber, GetmeNumber} = require('./jestTesting');


test ("adds 5 + 12 to equal 17", () => {
    expect(LuckyNumber(5,12)).toBe(17);
});

test ("adds 7 + 12 to not equal 8", () => {
    expect(GetmeNumber(7,12)).not.toBe(8);
});