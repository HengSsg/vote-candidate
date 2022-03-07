'use strict'

module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply) {

    const vote = this.mongo.db.collection('Vote')
    const id = this.mongo.ObjectId(request.params.id)
    const result = await vote.findOneAndDelete({'_id':id})

    reply
        .code(200)
        .header('content-type','application/json')
        .send({value:result.value,ok:result.ok})

  })
}
