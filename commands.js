#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
    addReview,
    findReview,
    updateReview,
    removeReview,
    listReviews,
    askDuck
} = require('./index');

//Review Questions
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the coding project you wish to review?',

        type: 'input',
        name: 'date',
        message: 'What is the date of this review?',

        type: 'input',
        name: 'issue',
        message: 'What is your current issue?',

        type: 'input',
        name: 'solution',
        message: 'What is the solution?',
    }
]

program
.version('1.0.0.')
.description('Digital Duck Debugging')

// program
// .command('add <key1> <key2> <key3> <key4>')
// .alias('a')
// .description('Add a code review')
// .action((key1, key2, key3, key4) => {
//     addReview({key1, key2, key3, key4});
// });

//Add Command
program
.command('add')
.alias('a')
.description('Add a code review')
.action(() => {
    prompt(questions).then(answers => addReview(answers));
});

//Find Command
program
.command('find <name>')
.alias('f')
.description('Find a code review')
.action(name => findReview(name));

//Update Command
program
.command('update <_id>')
.alias('u')
.description('Update a code review')
.action(_id => {
    prompt(questions).then(answers => updateReview(_id, answers));
});

//Remove Command
program
.command('remove <_id>')
.alias('r')
.description('Remove a code review')
.action(_id => removeReview(_id));

//List Command
program
.command('list')
.alias('l')
.description('List all code reviews')
.action(() => listReviews());

//Ask Command
program
.command('ask')
.alias('q')
.description("Ask the duck's opinion")
.action(() => askDuck());


program.parse(process.argv); 
