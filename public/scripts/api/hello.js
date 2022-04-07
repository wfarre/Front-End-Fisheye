const { readFileSync } = require('fs')
const { join } = require('path')
const file = readFileSync(join(__dirname, '_files', 'ci.yml'), 'utf8')
