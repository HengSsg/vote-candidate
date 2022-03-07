'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
        //const requestbody = await createOne(this.mongo, request.body)
        
        const Candidate = this.mongo.db.collection('Vote')
        const body = request.body
        const result = await Candidate.insertOne(body) 
           
        reply
        .code(200)
        .header('content-type','application/json')
        .send(result)
    })

}
