#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

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
  work: chalk.white('JavaScript and CSS Developer/Consultant/Trainer'),
  twitter: chalk.cyan('https://twitter.com/bradwestfall'),
  github: chalk.cyan('https://github.com/bradwestfall'),
  consulting: chalk.cyan('https://azpixels.com'),
  training: chalk.cyan('https://reacttraining.com'),
  personal: chalk.cyan('https://bradwestfall.com'),

  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelConsulting: chalk.white.bold(' Consulting:'),
  labelTraining: chalk.white.bold('   Training:'),
  labelPersonal: chalk.white.bold('   Personal:'),
}

// Actual strings we're going to output
const heading = `${data.name} ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const githubing = `${data.labelGitHub}  ${data.github}`
const consulting = `${data.labelConsulting}  ${data.consulting}`
const training = `${data.labelTraining}  ${data.training}`
const personal = `${data.labelPersonal}  ${data.personal}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + '\n\n' +
  working + '\n' +
  twittering + '\n' +
  githubing + '\n' +
  consulting + '\n' +
  training + '\n' +
  personal

console.log(chalk.green(boxen(output, options)))
