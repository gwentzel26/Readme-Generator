// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Write a brief description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Provide a step-by-step description on how to install your application:',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide examples and instructions for use:',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'List the tools and technologies used in this project:',
        name: 'credits',
      },
      {
        type: 'list',
        message: 'Choose your license:',
        choices: [
            "Apache 2.0",
            "Boost Software License 1.0",
            "BSD 3-Clause",
            "BSD 2-Clause",
            "CC0-1.0",
            "CC BY 4.0",
            "CC BY-SA 4.0",
            "CC BY-NC 4.0",
            "CC BY-ND 4.0",
            "CC BY-NC-SA 4.0",
            "CC BY-NC-ND 4.0",
            "Eclipse Public License 1.0",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU AGPL v3",
            "GNU LGPL v3",
            "GNU FDL v1.3",
            "IPL 1.0",
            "ICL",
            "MIT",
            "MPL 2.0",
            "Open Data Commons Attribution",
            "ODbL",
            "PDDL",
            "Artistic-2.0",
            "Open Font-1.1",
            "Unlicense",
            "WTFPL",
            "Zlib"
        ],
        name: 'license',
      },
      {
        type: 'input',
        message: 'List the main features for your application:',
        name: 'features',
      },
      {
        type: 'input',
        message: 'How can others contribute to your project?:',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Provide an email address for contact:',
        name: 'contact',
      },
  ])
  .then((response) => {
    console.log(response);

  }
    

  );

}

// Function call to initialize app
init();

