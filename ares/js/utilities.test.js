import Utilities from './utilities';

const utilities = new Utilities();

describe('percentDiff', () => {
    test('Finds 50% difference between 10 and 20', () => {
        expect(utilities.percentDiff(20, 10)).toBe(50);
    });
});

describe('checkForPastDate', () => {
    test('Returns true for date in the past', () => {
        expect(utilities.checkForPastDate('2020-09-27')).toBeTruthy();
    });
    test('Returns false for date in the future', () => {
        expect(utilities.checkForPastDate('2021-09-27')).toBeFalsy();
    });
});
