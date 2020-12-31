#! /usr/bin/env node

require('@babel/register')({
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
  presets: [
    '@babel/preset-typescript'
  ]
})

require('./index')
