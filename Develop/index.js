//Included packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Created an array of questions for user input
const questions = [

//1. Project Title
    {
        type: 'input',
        name: 'project title',
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
    message: 'Provide instructions and examples for use. Include screenshots as needed.'
},
//5. License
{
    type: 'rawlist',
    name: 'license',
    message: 'Provide instructions and examples for use. Include screenshots as needed.',
    choices: ['No License, Apache license 2.0, GNU Affero General Public License v3.0,MIT License, BSD 2-clause "Simplified" license, BSD 3-clause "New" or "Revised" license,Boost Software License 1.0, Creative Commons Zero v1.0 Universal, Eclipse Public License 2.0, GNU Affero General Public License v3.0,GNU General Public License v2.0,GNU Lesser General Public License v2.1, Mozilla Public License 2.0,The Unlicense,']
},
//6. Contribution
{
    type: 'input',
    name: 'contribution',
    message: 'If you would like other developers to contribute it, you can include guidelines for how to do so here.'
},
//6. Testing
{
    type: 'input',
    name: 'test',
    message: 'How can the user test your app? Provide detailed instructions.'
},

//7. Questions
{
    type: 'input',
    name: 'questions',
    message: 'Please provide an email address for questions.'
},

];

//Created a function to write README file
function writeToFile(fileName, data) {}




// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
