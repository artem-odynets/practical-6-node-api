# Практичне завдання 6 (Node.js)

Code Review, Unit-тестування, документація API.

## Стек

- Node.js
- Express
- Jest + supertest
- Swagger / Postman

## Встановлення

```bash
npm install
```

## Запуск сервера

```bash
npm start
# сервер буде доступний на http://localhost:3000
```

## Запуск тестів

```bash
npm test
```

## Структура проекту

- `server.js` — Express API (`/users`).
- `src/discountService.js` — бізнес-логіка (функції для unit-тестів).
- `__tests__/discountService.test.js` — unit-тести для бізнес-логіки.
- `__tests__/server.test.js` — тести для API.
- `docs/api/swagger.yaml` — опис API в форматі OpenAPI (Swagger).
- `docs/api/postman_collection.json` — колекція Postman.

## Бейдж статусу тестів (GitHub Actions)

Після налаштування GitHub Actions для тестів, додай сюди свій бейдж:

```markdown
![Tests](https://github.com/USERNAME/REPO/actions/workflows/tests.yml/badge.svg)
```

Заміни `USERNAME` та `REPO` на свої значення.

## API Documentation (Swagger)

Документація API описана у файлі:

`docs/api/swagger.yaml`

Онлайн-перегляд у Swagger Editor:
https://editor.swagger.io/

