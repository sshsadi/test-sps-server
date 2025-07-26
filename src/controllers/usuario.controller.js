const users = require('../modelos/usuarios');

exports.getAll = (req, res) => {
  res.json(users);
};

exports.getUser = (req, res) => {
  const { email } = req.params;  
  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }
  res.json(user);
};

exports.create = (req, res) => {
  const { email, username, type, password } = req.body;
  if (users.find(u => u.email === email)) {
    return res.status(400).json({ message: "El email ya se encuentra registrado. Verifique!" });
  }
  const newUser = { email, username, type, password };
  users.push(newUser);
  res.status(201).json(newUser);
};

exports.update = (req, res) => {
  const { email } = req.params;
  const user = users.find(u => u.email === email);
  if (!user) return res.status(404).json({ message: "El usuario no existe." });

  const { username, type, password } = req.body;
  user.username = username ?? user.username;
  user.type = type ?? user.type;
  user.password = password ?? user.password;

  res.json(user);
};

exports.remove = (req, res) => {
  const { email } = req.params;
  const index = users.findIndex(u => u.email === email);
  if (index === -1) return res.status(404).json({ message: "El usuario no existe." });

  users.splice(index, 1);
  res.json({ message: "Usuario eliminado" });
};