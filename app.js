const argv = require('./config/yargs').argv
const todo = require('./todo/todo')
const colors = require('colors')

let command = argv._[0]

switch (command) {
    case 'list':
        let todos = todo.list(argv.completed)
        console.log('======== TODOs ========'.green);
        for (let todo of todos) {
            console.log('-----------------------'.yellow);
            console.log(`Description ${todo.description}`.red);
            console.log(`Completed ${todo.completed}`.red);

        }
        console.log('======================'.green);
        break
    case 'create':
        let createdTodo = todo.create(argv.description)

        if (createdTodo) console.log(`Tasks ${argv.description} created`);
        else console.log(`Error creating the tasks ${argv.description}`);
        break
    case 'update':
        let updatedTodo = todo.update(argv.description, argv.completed)

        if (updatedTodo) console.log(`Tasks ${argv.description} updated`);
        else console.log(`Tasks ${argv.description} doesn't exist`);
        break
    case 'remove':
        let removeTodo = todo.remove(argv.description)

        if (removeTodo) console.log(`Tasks ${argv.description} deleted`);
        else console.log(`Tasks ${argv.description} doesn't exist`);
        break
    default:
        console.log('Command not recognized');
        break
}