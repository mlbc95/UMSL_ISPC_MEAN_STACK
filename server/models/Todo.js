const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    isEditting: {
        type: Boolean,
        default: false
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Todo = module.exports = mongoose.model('Todo', TodoSchema);

//Functions to be used
module.exports.addTodo = (newTodo, callback) => {
    newTodo.save(callback);
}

module.exports.getAllTodos = (callback) => {
    Todo.find(callback);
}

module.exports.updateTodo = (id, content, callback) => {
    Todo.findByIdAndUpdate(id, {
            $set: {
                content: content
            }
        }, {
            new: true
        })
        .exec(callback);
}

module.exports.completeTodo = (id, callback) => {
    Todo.findByIdAndUpdate(id, {
            $set: {
                completed: true
            }
        }, {
            new: true
        })
        .exec(callback);
}

module.exports.removeTodo = (id, callback) => {
    Todo.findByIdAndRemove(id)
        .exec(callback);
}