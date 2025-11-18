// src/discountService.js
// Проста бізнес-логіка для демонстрації unit-тестів

/**
 * Розрахунок знижки.
 * @param {number} amount - початкова сума
 * @param {number} percent - відсоток знижки (0-100)
 * @returns {number}
 */
function calculateDiscount(amount, percent) {
  //TODO: validate negative amount values
  if (typeof amount !== 'number' || typeof percent !== 'number') {
    throw new Error('amount і percent мають бути числами');
  }
  if (percent < 0 || percent > 100) {
    throw new Error('percent має бути в діапазоні 0-100');
  }
  const discount = amount * (percent / 100);
  return amount - discount;
}

/**
 * Перевірка прав доступу користувача за роллю.
 * @param {string} role - роль користувача (admin, user, guest)
 * @returns {boolean} - чи має користувач доступ до адмін-панелі
 */
function hasAdminAccess(role) {
  if (!role) return false;
  return role === 'admin';
}

module.exports = {
  calculateDiscount,
  hasAdminAccess
};
