'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    
  const vote = this.mongo.db.collection('Vote')
  const result = await vote.find({}).toArray()
  reply
      .code(200)
      .header('content-type', 'application/json')
      .send(result)
}
  )

}