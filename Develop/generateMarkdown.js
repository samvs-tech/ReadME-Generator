// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'No License') {
    return '';
  }
  else if (license === 'MIT'){
    return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  else if (license === 'Mozilla'){
    return '![Mozilla License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
  }
  else if (license === 'Apache'){
    return '![Apache License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  }
  else if (license === 'General Public License'){
    return '![GPL License](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } 
  else if (license === 'Creative Common Zero'){ 
    return '![CC0 License](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)'
  }
};






// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'No License') {
    return '';
  }
  else if (license === 'MIT'){
    return 'https://opensource.org/licenses/MIT'
  }
  else if (license === 'Mozilla'){
    return 'https://opensource.org/licenses/MPL-2.0'
  }
  else if (license === 'Apache'){
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  else if (license === 'General Public License'){
    return 'https://www.gnu.org/licenses/gpl-3.0'
  } 
  else if (license === 'Creative Common Zero'){ 
    return 'https://creativecommons.org/publicdomain/zero/1.0/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'No License') {
    return ''
  }

  return `## License
This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Collaborators](#collaborators)
  - [License](#license)
  - [Contact](#contact)
  
  ## Usage 
  ${data.usage}
  ## Collaborators
  ${data.collaborators}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contact
  ${data.questions}
`;


}
 
export default generateMarkdown;
