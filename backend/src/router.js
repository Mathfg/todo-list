const express = require('express');

const router = express.Router();

const tasksController = require('./controller/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validateBody, tasksController.addTask);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put('/tasks/:id', tasksMiddleware.validateBody, tasksMiddleware.validateStatus, tasksController.updateTask);

module.exports = router;