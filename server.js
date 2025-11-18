// server.js
// Простий Express-сервер з маршрутом /users (для прикладу документації API)

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Тимчасове зберігання користувачів в пам'яті
let users = [
  { id: 1, name: 'Artem' },
  { id: 2, name: 'Nastia' }
];

// GET /users - отримати список користувачів
app.get('/users', (req, res) => {
  res.json(users);
});

// POST /users - створити нового користувача
app.post('/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Поле name є обовʼязковим' });
  }
  const newUser = {
    id: users.length ? users[users.length - 1].id + 1 : 1,
    name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// DELETE /users/:id - видалити користувача
app.delete('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'Користувача не знайдено' });
  }
  const deleted = users.splice(index, 1)[0];
  res.json(deleted);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
