'use strict'

module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply) {
      
    const Vote = this.mongo.db.collection('Vote')
    const id = this.mongo.ObjectId(request.params.id)
    const query = {"_id" : id}
    const result = await Vote.deleteOne(query) 


    
    reply
        .code(200)
        .header('content-type','application/json')
        .send('삭제되었습니다')
    
  })
}