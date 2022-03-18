// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(generate, data) {
    generateMarkdown();
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
      message: 'Provide instruction on how to install your application:',
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
        message: 'How can others contribute to your project?:',
        name: 'contribute',
      },
      {
        type: 'input',
        message: 'Provide instructions on how to run your tests',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Provide an email address for contact:',
        name: 'email',
      },
      {
        type: 'input',
        message: 'Provide your github username:',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Provide a link to the deployed application or a walkthrough video',
        name: 'links1',
      },
      {
        type: 'input',
        message: 'Provide a link to the github repository',
        name: 'links2',
      },
  ])

  // const { type, message, name } = inquirer;
  .then((response) => {
const template = `
# **${response.title}**
  
## **Description (Motivation? The why? Solved Problems?)**
      
  ${response.description}
      
## **Table of Contents** 
      
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)
  -[Links](#links)
      
## **Installation <a id="installation"></a>**
  
  ${response.installation}
      
## **Usage <a id="usage"></a>** 
  md
  ![alt text](assets/images/screenshot.png)
  
  ${response.usage}
         
      
      
## **License <a id="license"></a>**
  ${response.license}
      
## **How to Contribute <a id="contributions"></a>**
      
  ${response.contribute}
      
## **Tests <a id="tests"></a>**
      
  ${response.tests}
      
## **Questions <a id="questions"></a>**
      
  Please feel free to reach me at ${response.email} or view my github profile at "https://github.com/gwentzel26", 
  my username is ${response.github}

## **Links <a id="links"></a>**
  Walkthrough Video or Deployed Application: "${response.links1}"
  Github Repository: "${response.links2}"
`;
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

