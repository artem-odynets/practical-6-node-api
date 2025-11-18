// __tests__/server.test.js
const request = require('supertest');
const app = require('../server');

describe('User API', () => {
  test('GET /users повертає масив користувачів', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('POST /users створює нового користувача', async () => {
    const res = await request(app)
      .post('/users')
      .send({ name: 'Test User' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('name', 'Test User');
  });

  test('POST /users без name повертає 400', async () => {
    const res = await request(app)
      .post('/users')
      .send({});

    expect(res.statusCode).toBe(400);
  });
});
