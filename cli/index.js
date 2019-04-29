#!/usr/bin/env node

const program = require('commander')
const { up } = require('../server/index')

program
  .option('-d, --dir [path]', 'The directory where the code locates', '')
  .option('-p, --port [value]', 'The port of server', 3450)
  .parse(process.argv)

const dir = program.dir
const port = program.port

up({ dir, port })

let url = `http://localhost:${port}`
console.log(url)
let start =
  process.platform === 'darwin'
    ? 'open'
    : process.platform === 'win32'
    ? 'start'
    : 'xdg-open'
require('child_process').exec(start + ' ' + url)
