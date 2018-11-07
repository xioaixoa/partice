'use strict'
const merge = require('webpack-merge')
const prodEnv = require('../src/pages/home/static/mock/prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
