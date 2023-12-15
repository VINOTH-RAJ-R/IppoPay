const splitArray = require('./minAbsoluteDifference');

describe('splitArray', () => {
    it('returns the correct absolute difference for input [3, 9, 7, 3]', () => {
        const result = splitArray([3, 9, 7, 3]);
        expect(result).toBe(2);
    });

    it('returns the correct absolute difference for input [2, -1, 0, 4, -2, -9]', () => {
        const result = splitArray([2, -1, 0, 4, -2, -9]);
        expect(result).toBe(0);
    });

    it('returns the correct absolute difference for input [-36, 36]', () => {
        const result = splitArray([-36, 36]);
        expect(result).toBe(72);
    });
});
