// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  `
  # ${response.title}

    ## Description (Motivation? The why? Solved Problems?)
    
      ${response.description}
    
    ## Table of Contents 
    
      - Installation
      - Usage
      - License
      - Contributions
      - Tests
      - Questions
    
    ## Installation

    ${response.installation}
    
    ## Usage
    
    To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
    
       md
        ![alt text](assets/images/screenshot.png)

        ${response.usage}
       
    

    
    ## License
    ${response.license}
    

    ## How to Contribute
    
    ${response.contribute}
    
    ## Tests
    
    ${response.tests}
    
    ## Questions
    Please feel free to reach me at ${response.email} or view my github profile, my username is ${response.github}
    `
  return `# ${data.title}

`;








}




module.exports = generateMarkdown;
