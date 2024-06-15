const express = require('express');
const Todo = require('../models/Todo');
const { getAllTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todos.contoller');


const router = express.Router();


router.get('/', getAllTodos);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
