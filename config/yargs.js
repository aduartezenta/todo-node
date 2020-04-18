const description = {
    alias: 'd',
    desc: 'TODO description',
    demand: true,
}

const completed = {
    alias: 'c',
    desc: 'Marks the TODO as completed',
    default: true
}

const argv = require('yargs')
    .command('list', 'Update TODO ', {
        completed
    })
    .command('create', 'Create TODO', {
        description
    })
    .command('remove', 'Remove TODO', {
        description
    })
    .command('update', 'Update TODO ', {
        description,
        completed
    })

//.command('update', 'Update TODO', opts)
.argv

module.exports = {
    argv
}