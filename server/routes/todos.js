const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');

//Add Todo
router.post('/add', (req, res) => {
    console.log(req.body);
    let newTodo = new Todo({
        content: req.body.content
    });

    Todo.addTodo(newTodo, (err, todo) => {
        if(err) {
            return res.json({
                success: false,
                title: 'Error',
                message: 'Error adding new todo',
                error: err
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

//Get All Todos
router.get('/', (req, res) => {
    Todo.getAllTodos((err, todos) => {
        if(err) {
            return res.json({
                success: false,
                title: 'Error',
                message: 'Error fetching todos',
                error: err
            });
        }

        res.json({
            success: true,
            title: 'Success',
            message: 'Todos fetched',
            todos: todos
        });
    });
});

//Complete Todo
router.put('/todo/:id', (req, res) => {
    Todo.completeTodo(req.params.id, req.body.completeStatus, (err, todo) => {
        if(err) {
            return res.json({
                success: false,
                title: 'Error',
                message: 'Error completing todo',
                error: err
            });
        }

        res.json({
            success: true,
            title: 'Success',
            message: 'Todo completed',
            todo: todo
        });
    });
});

//Edit Todo Content
router.put('/todo/edit/:id', (req, res) => {
    Todo.editTodoContent(req.params.id, req.body.content, (err, todo) => {
        if(err) {
            return res.json({
                success: false,
                title: 'Error',
                message: 'Error editing todo',
                error: err
            });
        }

        res.json({
            success: true,
            title: 'Success',
            message: 'Content edited',
            todo: todo
        });
    });
});

//Remove todo
router.delete('/todo/:id', (req, res) => {
    Todo.removeTodo(req.params.id, (err, todo) => {
        if(err) {
            return res.json({
                success: false,
                title: 'Error',
                message: 'Error removing todo',
                error: err
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