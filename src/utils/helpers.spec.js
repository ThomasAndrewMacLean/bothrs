import { getHumanReadableTime } from './helpers';

describe('helpers', () => {
    it('should return 1 day', () => {
        expect(getHumanReadableTime('2019-09-02T16:23:25.000Z', '2019-09-01T16:22:25.000Z')).toBe('1 day ago');
    });

    it('should return the number of days', () => {
        expect(getHumanReadableTime('2019-09-02T16:23:25.000Z', '2019-09-20T16:22:25.000Z')).toBe('17 days ago');
    });

    it('should return the date if it is longer ago than a month', () => {
        expect(getHumanReadableTime('2019-09-02T16:23:25.000Z', '2019-11-20T16:22:25.000Z')).toBe('2019-09-02');
    });

    it('should return the number of hours ago', () => {
        expect(getHumanReadableTime('2019-09-02T16:23:25.000Z', '2019-09-02T19:23:25.000Z')).toBe('3 hours ago');
    });

    it('should return just now', () => {
        expect(getHumanReadableTime('2019-09-02T16:23:25.000Z', '2019-09-02T15:26:25.000Z')).toBe('just now');
    });
});
