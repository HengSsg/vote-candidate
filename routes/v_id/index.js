'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/:id', async function (request, reply) {
    return 'this is an example'
  })
}