'use strict'

module.exports = async function (fastify, opts) {
  fastify.put('/:id', async function (request, reply) {
    const Candidate = this.mongo.db.collection('Candidate')
    const filter = Candidate.params.id.body
    const updatedoc = request.body
    const result = await Candidate.updateOne(filter, updatedoc)



      reply
        .code(200)
        .header('content-type','application/json')
        .send(result)
    

  })
}
