const jwt = require('jsonwebtoken');
const users = require('../modelos/usuarios');
require('dotenv').config();

exports.login = (req, res) => {
  const { email, password } = req.body;

  const usuario = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!usuario) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  const token = jwt.sign({ email: usuario.email, type: usuario.type }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
