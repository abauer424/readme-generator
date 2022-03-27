//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require('path');


// Created an array of questions for user input
const questions = [

//1. Project Title
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is your project title?'
      },
//2. Description
{
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project.'
},

//3. Installation
{
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
},
//4. Useage
{
    type: 'input',
    name: 'useage',
    message: 'Provide instructions and examples for useage.'
},
//5. License
{
    type: 'list',
    name: 'license',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
    choices: ['No License', 'Apache license 2.0','MIT License', 'BSD 2-clause "Simplified" license']
},
//6. Contribution
{
    type: 'input',
    name: 'contribution',
    message: 'If you would like other developers to contribute it, you can include guidelines for how to do so here.'
},
//7. Testing
{
    type: 'input',
    name: 'test',
    message: 'How can the user test your app? Provide detailed instructions.'
},

//8. Questions
{
    type: 'input',
    name: 'questions',
    message: 'Please provide an email address for questions.'
},
//9. Author
{
    type: 'input',
    name: 'author',
    message: 'What is the authors name?'
},

];

//Created a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,'./dist/'+ fileName),data)
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        writeToFile('README.md', generateMarkdown(answers));
    
    }) 
}

// Function call to initialize app
init();
