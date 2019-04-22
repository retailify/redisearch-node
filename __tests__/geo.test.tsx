import { GeoField } from '../src/fields';

test('geo field', () => {
  const field = new GeoField('test');
  expect(field.args()).toEqual(['test', 'GEO']);
});
