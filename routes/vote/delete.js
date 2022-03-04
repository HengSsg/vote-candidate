'use strict'

module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply) {
      const result = {
          "v_id": "투표아이디",
          "title" : "미스터트롯"
      }

    reply
        .code(200)
        .header('content-type','application/json')
        .send(result)
    
  })
}
