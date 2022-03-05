// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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

  // const { type, message, name } = inquirer;
  .then((response) => {
    const template = `# <Your-Project-Title>

    ## Description (Motivation? The why? Solved Problems?)
    
      ${response.description}
    
    ## Table of Contents 
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ## Installation

    ${response.installation}
    
    ## Usage
    
    To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
       md
        ![alt text](assets/images/screenshot.png)
       
    
    ## Credits
    
    
    
    ## License
    
    
    ## Badges
    
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
    ## Features
    
    If your project has a lot of features, list them here.
    
    ## How to Contribute
    
    If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
    
    ## Tests
    
    Go the extra mile and write tests for your application. Then provide examples on how to run them here.`
    
    console.log(response);
    fs.writeFile("template.md", template, (err) => {
        err ? console.error(err) : console.log("File has been written");
    }
    )

  }
    

  );

}

// Function call to initialize app
init();

