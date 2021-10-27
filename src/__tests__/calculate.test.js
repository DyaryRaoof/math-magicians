import calculate from '../logic/calculate';

describe('test calculate', () => {
  test('expect to return object with null values', () => {
    const obj = {};
    const btnName = 'AC';
    expect(calculate(obj, btnName)).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('expect to retun empty object', () => {
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    const btnName = '0';
    expect(calculate(obj, btnName)).toStrictEqual({});
  });
});
