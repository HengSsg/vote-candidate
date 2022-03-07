'use strict'

module.exports = async function (fastify, opts) {
  fastify.put('/:id', async function (request, reply) {
    const Vote = this.mongo.db.collection('Vote')
    const id = this.mongo.ObjectId(request.params.id)
    const filter = {'_id' : id}
    const replacement = request.body
    const result = await Vote.findOneAndReplace(filter, replacement)


      reply
        .code(200)
        .header('content-type','application/json')
        .send({'message' : '수정완료'})
    

  })
}
