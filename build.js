'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('               Matt Lagrotte'),
  handle: chalk.white('unclvito'),
  work: chalk.white('Principle Member of Technical Staff at Salesforce'),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan('unclvito'),
  github: chalk.gray('https://github.com/') + chalk.green('unclvito'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('lagrotte'),
  tesla: chalk.gray('https://ts.la/') + chalk.yellow('matt17582'),
  tonal: chalk.gray('http://fbuy.me/') + chalk.yellow('v/matt_8054'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~unclvito'),
  web: chalk.cyan('https://stuffbymatt.com'),
  npx: chalk.red('npx') + ' ' + chalk.white('unclvito'),
  labelWork: chalk.white.bold('       Work:'),
  labelTwitter: chalk.white.bold('    Twitter:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelTesla: chalk.white.bold('      Tesla:'),
  labelTonal: chalk.white.bold('      Tonal:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`
const teslaing = `${data.labelTesla}  ${data.tesla}`
const tonaling = `${data.labelTonal}  ${data.tonal}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               twittering + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               teslaing + newline + // data.labelWeb + data.web
               tonaling + newline + // data.labelWeb + data.web
               webing // + newline + newline + // data.labelWeb + data.web
               //carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
