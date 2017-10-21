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
        if(error) {
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
        if(error) {
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
module.exports = router;