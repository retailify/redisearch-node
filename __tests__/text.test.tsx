import { TextField } from '../src/fields';

test('text field with default args', () => {
  const field = new TextField('test');
  expect(field.args()).toEqual(['test', 'TEXT', 'WEIGHT', 1]);
});

test('text field with weight 0.9', () => {
  const field = new TextField('test', 0.9);
  expect(field.args()).toEqual(['test', 'TEXT', 'WEIGHT', 0.9]);
});

test('sortable text field with weight 0.9', () => {
  const field = new TextField('test', 0.9, true);
  expect(field.args()).toEqual(['test', 'TEXT', 'WEIGHT', 0.9, 'SORTABLE']);
});

test('sortable text field with weight 0.9 nostem', () => {
  const field = new TextField('test', 0.9, true, true);
  expect(field.args()).toEqual([
    'test',
    'TEXT',
    'WEIGHT',
    0.9,
    'SORTABLE',
    'NOSTEM'
  ]);
});

test('sortable text field with weight 0.9 nostem', () => {
  const field = new TextField('test', 0.9, true, true, true);
  expect(field.args()).toEqual([
    'test',
    'TEXT',
    'WEIGHT',
    0.9,
    'SORTABLE',
    'NOSTEM',
    'NOINDEX'
  ]);
});

test('sortable text field with weight 0.9 nostem', () => {
    const field = new TextField('test', 0.9, true, false, true);
    expect(field.args()).toEqual([
      'test',
      'TEXT',
      'WEIGHT',
      0.9,
      'SORTABLE',
      'NOINDEX'
    ]);
  });

test('not sortable text field with weight 0.9 nostem', () => {
  try {
    const field = new TextField('test', 0.9, false, true, true);
    field.args();
  } catch (e) {
    expect(e.message).toBe('Non-Sortable non-Indexable fields are ignored');
  }
});
