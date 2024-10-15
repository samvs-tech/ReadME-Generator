// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the project title?',
    name: 'title',
},
{
    type: 'input',
    message: 'Enter a project description',
    name: 'description',
},
{
    type: 'input',
    message: 'What are the steps to install your project?',
    name: 'installation',
},
{
    type: 'input',
    message: 'How would someone use your project?',
    name: 'usage',
},
{
    type: 'input',
    message: 'Enter the names of collaborators',
    name: 'collaborators',
},
{
    type: 'list',
    message: 'What license would you like to have for your project?',
    name: 'license',
    choices: ['No License', 'MIT', 'Mozilla', 'Apache', 'General Public License', 'Creative Common Zero'],
},
{
    type: 'input',
    message: "Enter your email if you'd like people to reach out to you with quetions.",
    name: 'questions',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdownContent = generateMarkdown(data);
  fs.writeFileSync(fileName, markdownContent, (err) => { 
    if (err) {
    console.error("Error writing file", err);
  } else {
    console.log("Succesfully created README.md")
  }

  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      writeToFile('README.md', answers);
      }).catch((error) => {
      console.error("Error:", error);
  });
}

// Function call to initialize app
init();
