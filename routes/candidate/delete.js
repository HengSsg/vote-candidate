'use strict'

module.exports = async function (fastify, opts) {
  fastify.delete('/:id', async function (request, reply) {
      
    const candiates = this.mongo.db.collection('Candidate')
    const id = this.mongo.ObjectId(request.params.id)
    const result = await candiates.findOneAndDelete({'_id':id})
    
    console.log('result:!!::!:::',result)

    reply
        .code(200)
        .header('content-type','application/json')
        .send({value:result.value,ok:result.ok})

    
  })
}
