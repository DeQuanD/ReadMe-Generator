// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license != 'None'){
    return `![shield](https://img.shields.io/badge/License-${license}-success)`
  }else{
    return ''
  }
  };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license != 'None'){
    return `* [License](#license)`
  }else{
    return ''
  }};
function renderLicenseDescription(license){
  if (license == "Apache_2.0") {
    return "[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)"
  }else if (license == "BSD"){
    return "[BSD](https://opensource.org/licenses/BSD-3-Clause)"
  }else if (license == "GNU"){
    return '[GNU](https://www.gnu.org/licenses/gpl-3.0)'
  }else if (license == "MIT"){
    return "[MIT](https://opensource.org/licenses/MIT)"     
  }else if (license == "MPL_2.0"){
    return '[MPL](https://opensource.org/licenses/MPL-2.0)'
  }else{
    return ''
  }};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != 'None'){
    return `# License\n Licensed under the  ${renderLicenseDescription(license)} license`
  }else{
    return ''
  }};

function contributionStatement(response){
  if (response == "yes"){
    return `Any input is appreciated. Please contact me for any of the following:
 - Reporting a bug
 - Discussing the current state of the code
 - Submitting a fix
 - Proposing new features
 - Becoming a maintainer`
  }else{
    return "This project is not currently in need of collaborators at this time."
  }};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} 
  ${renderLicenseBadge(data.License)}
  # Description
  ${data.Description}

  ## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [Test](#test)
 * [Contributions](#contributions)
 ${renderLicenseLink(data.License)}

  # Installation
  ${data.Installation}

  # Usage
  ${data.Usage}

  # Test
  ${data.Test_Instructions}

  # Contributions
  ${contributionStatement(data.Contributions)}

  ${renderLicenseSection(data.License)}
 

  # Questions

  If you have any questions about this project please don't hesitate to contact me via GitHub: https://github.com/${data.Username} or my email: ${data.Email}

`;
}

module.exports = generateMarkdown;
