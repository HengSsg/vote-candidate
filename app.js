'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
require('dotenv').config()

module.exports = async function (fastify, opts) {
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

  const id = process.env.MONGODB_ID
  const password = process.env.MONGODB_PASSWORD

  fastify.register(require('fastify-mongodb'), {
    forceClose: true,
    
    url: `mongodb+srv://${id}:${password}@cluster0.liof4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  })
}



