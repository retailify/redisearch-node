import { Field } from '../../src/fields';

test('field without args', () => {
  const field = new Field('test');
  expect(field.args()).toEqual(['test']);
});

test('field with string arg', () => {
  let field = new Field('test');
  field['addArg']('NOINDEX');
  expect(field.args()).toEqual(['test', 'NOINDEX']);
});

test('field with number arg', () => {
  let field = new Field('test');
  field['addArg'](1.09);
  expect(field.args()).toEqual(['test', 1.09]);
});

test('field with mixed args', () => {
  let field = new Field('test');
  field['addArgs'](['WEIGHT', 1.09, 'NOINDEX'])
  expect(field.args()).toEqual(['test', 'WEIGHT', 1.09, 'NOINDEX']);
});
