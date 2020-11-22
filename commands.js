#!/usr/bin/env node
const program = require('commander');
const inquirer = require('inquirer');
const {
    summonDuck,
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
.version('1.0.1.')
.description(
`  __
<(o )___
 ( ._> /
  '---'  
                                                                                                                                  
88888888ba                88           88                                      88888888ba,                             88         
88      "8b               88           88                                      88      '"8b                            88         
88      ,8P               88           88                                      88        '8b                           88         
88aaaaaa8P'  88       88  88,dPPYba,   88,dPPYba,    ,adPPYba,  8b,dPPYba,     88         88  88       88   ,adPPYba,  88   ,d8   
88""""88'    88       88  88P'    "8a  88P'    "8a  a8P_____88  88P'   "Y8     88         88  88       88  a8"     ""  88 ,a8"    
88    '8b    88       88  88       d8  88       d8  8PP"""""""  88             88         8P  88       88  8b          8888[      
88     '8b   "8a,   ,a88  88b,   ,a8"  88b,   ,a8"  "8b,   ,aa  88             88      .a8P   "8a,   ,a88  "8a,   ,aa  88'"Yba,   
88      '8b   '"YbbdP'Y8  8Y"Ybbd8"'   8Y"Ybbd8"'    '"Ybbd8"'  88             88888888Y"'     '"YbbdP'Y8   '"Ybbd8"'  88   'Y8a  
                                                                                                                                  
                                                                                                                                  
                                                                                                                                  
88888888ba,                88                                                  88                                                 
88      ''"8b               88                                                  ""                                                 
88        '8b              88                                                                                                     
88         88   ,adPPYba,  88,dPPYba,   88       88   ,adPPYb,d8   ,adPPYb,d8  88  8b,dPPYba,    ,adPPYb,d8                       
88         88  a8P_____88  88P'    "8a  88       88  a8"    'Y88  a8"    'Y88  88  88P'   '"8a  a8"    'Y88                       
88         8P  8PP"""""""  88       d8  88       88  8b       88  8b       88  88  88       88  8b       88                       
88      .a8P   "8b,   ,aa  88b,   ,a8"  "8a,   ,a88  "8a,   ,d88  "8a,   ,d88  88  88       88  "8a,   ,d88                       
88888888Y"'     '"Ybbd8"'  8Y"Ybbd8"'    '"YbbdP'Y8   '"YbbdP"Y8   '"YbbdP"Y8  88  88       88   '"YbbdP"Y8                       
                                                      aa,    ,88   aa,    ,88                    aa,    ,88                       
                                                       "Y8bbdP"     "Y8bbdP"                      "Y8bbdP"                        
  __
<(o )___
 ( ._> /
  '---'
`)

// program
// .command('add <key1> <key2> <key3> <key4>')
// .alias('a')
// .description('Add a code review')
// .action((key1, key2, key3, key4) => {
//     addReview({key1, key2, key3, key4});
// });

//Ask Command
program
.command('start')
.alias('s')
.description("Summons your duck to the terminal")
.action(() => summonDuck());

//Add Command
program
.command('add')
.alias('a')
.description('Add a code review')
.action(() => {
    inquirer.prompt(questions).then(answers => addReview(answers));
});

//Find Command
program
.command('find <keyword>')
.alias('f')
.description('Find a code review')
.action(input => findReview(input));

//Update Command
program
.command('update <_id>')
.alias('u')
.description('Update a code review')
.action(_id => {
    inquirer.prompt(questions).then(answers => updateReview(_id, answers));
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
