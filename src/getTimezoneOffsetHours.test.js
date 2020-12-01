const getTimezoneOffsetHours = require('./getTimezoneOffsetHours');

test('getTimezoneOffsetHours return 0', () => {
    expect(getTimezoneOffsetHours()).toBe(0);
});