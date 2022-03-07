module.exports = async function (fastify, opts) {
    fastify.post('/', async function (request, reply) {
    
     const Candidate = this.mongo.db.collection('Candidate')
     const body = request.body
     const result = await Candidate.insertOne(body) 
        
        reply
            .code(201)
            .header('content-type', 'application/json')
            .send({c_id : result.insertedId})
    }
    )
  }