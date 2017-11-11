const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');

//Post: Create, Get: Retrieve, Put: Update, Delete: Delete

//Add todo
router.post('/add', (req, res) => {
    console.log('Request coming in /add: ', req.body);
    let newTodo = new Todo({
        content: req.body.content
    });

    Todo.addTodo(newTodo, (error, todo) => {
        if (error) {
            return res.json({
                success: false,
                title: 'Error',
                message: 'Error adding new todo',
                error: error
            });
        }

        res.json({
            success: true,
            title: 'Success',
            message: 'Todo added successfully',
            todo: todo
        });
    });
});

//Get All Todos //localhost:3000/todos/
router.get('/', (req, res) => {
    Todo.getAllTodos((error, todos) => {
        if (error) {
            return res.json({
                success: false,
                title: 'Error',
                message: 'Error fetching all todos',
                error: error
            });
        }

        res.json({
            success: true,
            title: 'Success',
            message: 'All todos fetched',
            todos: todos
        });
    });
});

//Update Todo
router.put('/:id', (req, res) => {
    Todo.updateTodo(req.params.id, req.body.content, (error, todo) => {
        if (error) {
            return res.json({
                success: false,
                title: 'Error',
                message: 'Error updating todo',
                error: error
            });
        }

        res.json({
            success: true,
            title: 'Success',
            message: 'Todo updated',
            todo: todo
        });
    });
});

//Complete Todo
router.put('/todo/:id', (req, res) => {
    Todo.completeTodo(req.params.id, (error, todo) => {
        if (error) {
            return res.json({
                success: false,
                title: 'Error',
                message: 'Error completed todo',
                error: error
            });
        }

        res.json({
            success: true,
            title: 'Success',
            message: 'Todo updated',
            todo: todo
        });
    });
});

//Remove Todo
router.delete('/:id', (req, res) => {
    Todo.removeTodo(req.params.id, (error, todo) => {
        if (error) {
            return res.json({
                success: false,
                title: 'Error',
                message: 'Error removing todo',
                error: error
            });
        }

        res.json({
            success: true,
            title: 'Success',
            message: 'Todo removed',
            todo: todo
        });
    });
});
module.exports = router;