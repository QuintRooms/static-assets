import Func from './func';

const func = new Func();

test('adds 3 + 3 to equal 6', () => {
    expect(func.sum(3, 3)).toBe(6);
});

test('subtracts 5 from 10 to equal 5', () => {
    expect(func.subtract(10, 5)).toBe(5);
});
