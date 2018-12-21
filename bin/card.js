#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// All credit for this idea goes to: https://github.com/bnb/bitandbang

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('Brad Westfall /'),
  handle: chalk.cyan('bradwestfall'),
  work: chalk.white('JavaScript/React and CSS: Consulting and Training'),
  twitter: chalk.cyan('https://twitter.com/bradwestfall'),
  github: chalk.cyan('https://github.com/bradwestfall'),
  consulting: chalk.cyan('http://azpixels.com'),
  training: chalk.cyan('https://reacttraining.com'),
  personal: chalk.cyan('http://bradwestfall.com'),
  card: chalk.cyan('https://github.com/bradwestfall/npx-bradwestfall'),

  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelConsulting: chalk.white.bold(' Consulting:'),
  labelTraining: chalk.white.bold('   Training:'),
  labelPersonal: chalk.white.bold('   Personal:'),
  labelCard: chalk.white.bold('       Card:'),
}

// Actual strings we're going to output
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const consulting = `${data.labelConsulting}  ${data.consulting}`
const training = `${data.labelTraining}  ${data.training}`
const personal = `${data.labelPersonal}  ${data.personal}`
const card = `${data.labelCard}  ${data.card}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + '\n\n' +
  working + '\n' +
  twittering + '\n' +
  githubing + '\n' +
  consulting + '\n' +
  training + '\n' +
  personal + '\n' +
  card

console.log(chalk.green(boxen(output, options)))
