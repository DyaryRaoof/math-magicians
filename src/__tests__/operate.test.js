import operate from '../logic/operate';

describe('expect to return 0', () => {
  test('use + to return 0', () => {
    expect(operate('0', '0', '+')).toBe('0');
  });

  test('use - to return 0', () => {
    expect(operate('5', '5', '-')).toBe('0');
  });

  test('use ÷ to return 0', () => {
    expect(operate('0', '1', '÷')).toBe('0');
  });

  test('use x to return 0', () => {
    expect(operate('0', '1', 'x')).toBe('0');
  });

  test('use % to return 0', () => {
    expect(operate('4', '2', '%')).toBe('0');
  });
});
