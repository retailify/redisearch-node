import { TagField } from '../src/fields';

test('tag field', () => {
  const field = new TagField('test');
  expect(field.args()).toEqual(['test', 'TAG']);
});

test('no indexable tag field', () => {
  const field = new TagField('test', true);
  expect(field.args()).toEqual(['test', 'TAG', 'NOINDEX']);
});

test('indexable tag field', () => {
  const field = new TagField('test', false);
  expect(field.args()).toEqual(['test', 'TAG']);
});

test('indexable tag field with | separator', () => {
  const field = new TagField('test', false, '|');
  expect(field.args()).toEqual(['test', 'TAG', 'SEPARATOR', '|']);
});

test('no indexable tag field with | separator', () => {
  const field = new TagField('test', true, '|');
  expect(field.args()).toEqual(['test', 'TAG', 'SEPARATOR', '|', 'NOINDEX']);
});
