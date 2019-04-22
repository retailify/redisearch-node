import { Limit } from '../../src/aggregation';

test('test limit without args', () => {
  const limit = new Limit();
  expect(limit.args()).toEqual([]);
});

test('test limit with count', () => {
  const limit = new Limit(0, 10);
  expect(limit.args()).toEqual(['LIMIT', 0, 10]);
});
