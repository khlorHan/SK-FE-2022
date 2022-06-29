import { calcTax } from './tax';

test('calcTax(10000) → 300', () => {
  expect(calcTax(10000)).toBe(300);
});
