'use strict'

require('dotenv').config()
console.log(process.env.MONGODB_ENDPOINT) // remove this after you've confirmed it working

const path = require('path')
const AutoLoad = require('fastify-autoload')
const { ObjectId } = require('fastify-mongodb')

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })

const id = process.env.MONGODB_ID
const pw = process.env.MONGODB_PASSWORD

fastify.register(require('fastify-mongodb'), {
  // force to close the mongodb connection when app stopped
  // the default value is false
  forceClose: true,
  
  url: `mongodb+srv://${id}:${pw}@cluster0.tnbnq.mongodb.net/hengsgg?retryWrites=true&w=majority`
})

}


