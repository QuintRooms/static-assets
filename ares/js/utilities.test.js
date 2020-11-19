// import fetchMock from 'jest-fetch-mock';
import Utilities from './utilities';

// fetchMock.enableMocks();

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

// describe('fetchHTMLFromFile', () => {
//     const url = 'https://dev-static.hotelsforhope.com/ares/clients/formula_1/html/f1-header.html';

//     test('Returns HTML from a local file', async () => {
//         expect(utilities.fetchHTMLFromFile(url)).toBeTruthy();
//     });
//     test('Is only called one time', async () => {
//         expect(utilities.fetchHTMLFromFile(url)).toHaveBeenCalledTimes(1);
//     });
//     test('Was called with a path to html on dev server', async () => {
//         expect(utilities.fetchHTMLFromFile(url)).toHaveBeenCalledWith('https://dev-static.hotelsforhope.com/ares/clients/formula_1/html/f1-header.html');
//     });
// });
