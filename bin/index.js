#!/usr/bin/env node

const { Command } = require('commander')
const program = new Command()
const boxen = require('boxen')
const version = require('../package.json').version
require('colors')

const title = boxen('🦴 Them Bones 🦴'.bold.brightGreen, {
  borderStyle: 'classic',
  padding: 1,
  margin: 1
})

program
  .version(version, '-v, --version', 'Output the current version')
  .description(
    'Them Bones is a CLI Tool to generate REST APIs for Node-JS with Express-JS.'
  )
  .name('Them Bones')

console.log(title)
program.parse(process.argv)
