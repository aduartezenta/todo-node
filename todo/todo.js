const fs = require('fs')

let todos = []

let save = () => {
    let data = JSON.stringify(todos)
    fs.writeFile('./db/todo-data.json', data, (err) => {
        if (err) throw new Error('Error trying to save the TODOs')
    })
}

let load = () => {
    try {
        todos = require('../db/todo-data.json')
    } catch (error) {
        todos = []
    }
}

let create = (description) => {
    load()

    let todo = {
        description,
        completed: "false"
    }
    todos.push(todo)
    save()

    return todo
}

let list = (completed) => {
    load()
    return todos.filter((todo) => todo.completed === completed)
}

let update = (description, completed) => {
    load()

    let todo = todos.find(todo => todo.description === description)
    if (!todo) return false
    todo.completed = completed.toString()

    save()
    return todo
}

let remove = (description) => {
    load()

    let index = todos.findIndex(todo => todo.description === description)
    if (index < 0) return false
    todos.splice(index, 1)

    save()
    return todos
}

module.exports = {
    create,
    list,
    update,
    remove
}