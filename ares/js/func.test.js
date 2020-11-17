const {sum, subtract} = require('./func');

test('adds 3 + 3 to equal 6', () => {
    expect(sum(3, 3)).toBe(6);
});

test('subtracts 5 from 10 to equal 5', () => {
    expect(subtract(10, 5)).toBe(5);
});
