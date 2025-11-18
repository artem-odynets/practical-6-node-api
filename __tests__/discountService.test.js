// __tests__/discountService.test.js
const { calculateDiscount, hasAdminAccess } = require('../src/discountService');

// AAA (Arrange, Act, Assert) підхід

test('calculateDiscount: 10% від 100 дорівнює 90', () => {
  // Arrange
  const amount = 100;
  const percent = 10;

  // Act
  const result = calculateDiscount(amount, percent);

  // Assert
  expect(result).toBe(90);
});

test('calculateDiscount: 0% знижка не змінює суму', () => {
  const result = calculateDiscount(200, 0);
  expect(result).toBe(200);
});

test('calculateDiscount: некоректний percent викликає помилку', () => {
  expect(() => calculateDiscount(100, 150)).toThrow('percent має бути в діапазоні 0-100');
});

test('hasAdminAccess: admin має доступ', () => {
  const result = hasAdminAccess('admin');
  expect(result).toBe(true);
});

test('hasAdminAccess: user не має доступу', () => {
  const result = hasAdminAccess('user');
  expect(result).toBe(false);
});
