'use strict'

module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply) {
      
    const Candidate = this.mongo.db.collection('Candidate')
    const id = this.mongo.ObjectId(request.params.id)
    const query = {"_id" : id}
    const result = await Candidate.deleteOne(query) 


    
    reply
        .code(200)
        .header('content-type','application/json')
        .send('삭제되었습니다')
    
  })
}
