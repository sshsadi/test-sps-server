const express = require('express');
const router = express.Router();
const userController = require('./controllers/usuario.controller');
const authMiddleware = require('./middlewares/autenticacion');

router.use(authMiddleware);

router.get('/', userController.getAll);
router.get('/:email', userController.getUser);
router.post('/', userController.create);
router.put('/:email', userController.update);
router.delete('/:email', userController.remove);

module.exports = router;