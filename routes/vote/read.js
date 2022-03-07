'use strict'


  
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    
  const dashboard = this.mongo.db.collection('dashboard')
  const result = await dashboard.find({}).toArray()
  console.log('result@@@',request)
  
  reply
  .code(200)
  .header('content-type', 'application/json')
  .send(result)
}
  )

  fastify.get('/:id', async function (request, reply) {
    
  const dashboard = this.mongo.db.collection('dashboard')
  const id = this.mongo.ObjectId(request.params.id)
  const result = await dashboard.findOne(id,dashboard)
  console.log('result@@@',result)

  reply
  .code(200)
  .header('content-type', 'application/json')
  .send(result)

}
  )
}