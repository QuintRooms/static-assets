import fetchMock from 'jest-fetch-mock';
import Utilities from './utilities';

fetchMock.enableMocks();

const utilities = new Utilities();

beforeEach(() => {
    fetch.resetMocks();
});

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

describe('fetchHTMLFromFile', () => {
    const url = 'https://dev-static.hotelsforhope.com/ares/clients/formula_1/html/f1-header.html';

    it('Returns HTML from a local file', async () => {
        fetch.mockResponseOnce('12345');
        const html_data = await utilities.fetchHTMLFromFile(url);

        expect(html_data).toEqual('12345');
        expect(html_data).toEqual(expect.not.stringContaining(' '));
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://dev-static.hotelsforhope.com/ares/clients/formula_1/html/f1-header.html');
    });

    it('catches errors and returns the url and the error', async () => {
        fetch.mockReject(new Error('Not 2xx response'));
        // const html_data = await utilities.fetchHTMLFromFile(url);
        expect(await utilities.fetchHTMLFromFile('https://dev-static.hotelsforhope.com/ares/clients/formula_1/html/f1-header.html')).toEqual('Error: Not 2xx response');
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
