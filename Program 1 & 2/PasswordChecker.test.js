const { isStrong, minStepsToMakeStrong } = require('./PasswordChecker');

describe('isStrong', () => {
  it('should return false for input "a"', () => {
    expect(isStrong('a')).toBe(false);
  });

  it('should return false for input "aA"', () => {
    expect(isStrong('aA')).toBe(false);
  });

  it('should return false for input "aA1"', () => {
    expect(isStrong('aA1')).toBe(false);
  });

  it('should return true for input "1337C0d3"', () => {
    expect(isStrong('1337C0d3')).toBe(true);
  });
});

describe('minStepsToMakeStrong', () => {
  it('should return 5 for input "a"', () => {
    expect(minStepsToMakeStrong('a')).toBe(5);
  });

  it('should return 3 for input "aA1"', () => {
    expect(minStepsToMakeStrong('aA1')).toBe(3);
  });

  it('should return 0 for input "1337C0d3"', () => {
    expect(minStepsToMakeStrong('1337C0d3')).toBe(0);
  });
});
