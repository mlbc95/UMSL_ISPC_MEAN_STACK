const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    isEditting: {
        type: String,
        default: false
    },
    completed: {
        type: String,
        required: true,
        default: false
    }
});

const Todo = module.exports = mongoose.model('Todo', TodoSchema);

//Functions to use in Route
module.exports.addTodo = (newTodo, callback) => {
    newTodo.save(callback);
}

module.exports.completeTodo = (id, completedStatus, callback) => {
    Todo.findByIdAndUpdate(id, {$set: {completed: completedStatus}}, {new: true})
        .exec(callback);
}

module.exports.editTodoContent = (id, content, callback) => {
    Todo.findByIdAndUpdate(id, {$set: {content: content}}, {new: true})
        .exec(callback);
}

module.exports.removeTodo = (id, callback) => {
    Todo.findByIdAndRemove(id)
        .exec(callback);
}

module.exports.getAllTodos = (callback) => {
    Todo.find(callback);
}