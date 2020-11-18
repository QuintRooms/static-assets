import Utilities from './utilities';

const utilities = new Utilities();

describe('percentDiff', () => {
    test('finds 50% difference between 10 and 20', () => {
        expect(utilities.percentDiff(20, 10)).toBe(50);
    });
});
