'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
        //const requestbody = await createOne(this.mongo, request.body)
        const result = {
           'v_id' : 4
        }
    
        reply
        .code(200)
        .header('content-type','application/json')
        .send(result)
    })

}
