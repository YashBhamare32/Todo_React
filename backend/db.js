const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bobbybhamare32:Bobby%402032@yash.wdjwqmp.mongodb.net/todo_db");

const todoSchema = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const db_todo = mongoose.model('todos' , todoSchema);

module.exports = {
    db_todo
}