//Created a function that returns a license badge based on which license is passed in
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
  return `
  # ${data.title}

  ## Table-Of-Contents

  -[Description](#description)
  -[Installation](#installation)
  -[Useage](#useage)
  -[License](#license)
  -[Contributions](#contribution)
  -[Testing](#test)
  -[Questions](#questions)

  ## [Description]
  ${data.description}

  ##[Installation]
  ${data.installation}

  ##[Useage]
  ${data.useage}

  ##[License]
  ${data.license}

  ##[Contribution]
  ${data.contribution}

  ##[Questions]
  Please contact me at the email address below:
  ${data.questions}

`;
}

module.exports = generateMarkdown;
