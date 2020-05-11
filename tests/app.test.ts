import { hello } from '../src/app';

test('Hello world', () => {
  expect(hello()).toBe('hello world!');
});
