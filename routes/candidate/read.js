'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/:id', async function (request, reply) {

        const result = {
            'c_name' : '이호용',
            'image' : '이미지',
            'desc' : '설명'
        }
      

        reply
            .code(200)
            .header('content-type', 'application/json')
            .send(result)
    })
  }
  