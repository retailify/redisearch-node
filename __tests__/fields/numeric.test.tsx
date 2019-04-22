import { NumericField } from '../../src/fields';

test('geo field', () => {
  const field = new NumericField('test');
  expect(field.args()).toEqual(['test', 'NUMERIC']);
});

test('sortable geo field', () => {
  const field = new NumericField('test', true);
  expect(field.args()).toEqual(['test', 'NUMERIC', 'SORTABLE']);
});

test('sortable geo field set by all args', () => {
  const field = new NumericField('test', true, false);
  expect(field.args()).toEqual(['test', 'NUMERIC', 'SORTABLE']);
});

test('no indexable, sortable geo field', () => {
  const field = new NumericField('test', true, true);
  expect(field.args()).toEqual(['test', 'NUMERIC', 'SORTABLE', 'NOINDEX']);
});

test('not indexable, not sortable geo field', () => {
  try {
    const field = new NumericField('test', false, true);
    field.args();
  } catch (e) {
    expect(e.message).toBe('Non-Sortable non-Indexable fields are ignored');
  }
});
