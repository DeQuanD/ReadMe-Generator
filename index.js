const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =require('./generateMarkdown')

const questions = [
    {
        type: 'input',
        message:"What is the title of your project?",
        name: "Title"
    },
    {
        type: "input",
        message:"Provide a short description of your project.",
        name: "Description"
    },
    {
        type: "input",
        message:"What are the steps to install your project.",
        name: "Installation"
    },
    {
        type: "input",
        message: "Provide instructions for use.",
        name: "Usage"
    },
    {
        type:"checkbox",
        message:"Specify contribution guidelines?",
        choices: ["yes", "no"],
        default: ["yes"],
        name:"Contributions"
        
    },
    {
        type:"checkbox",
        message: "Include Test Instructions?",
        choices: ["npm test"],
        default: ["npm test"],
        name: "Test_Instructions"

    },
    {
        type: "checkbox",
        message: "Choose Software License",
        choices: ["Apache_2.0", "BSD", "GNU", "MIT", "MPL_2.0", "None"],
        name: "License"
    },
    {
        type: "input",
        message:"Please Provide your GitHub username?",
        name: "Username"
    },
    {
        type: "input",
        message:"Please provide your Email address",
        name: "Email"

    }
];

    // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>{
        if (err) throw err
        console.log(err)
    })}; 
    


// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answer)=> {writeToFile("README.md", generateMarkdown({...answer}))})
    .catch((err) => {console.log(err)})
}

// Function call to initialize app
init();
