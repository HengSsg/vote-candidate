module.exports = async function (fastify, opts) {
  //관리자가 후보자 정보를 등록함.
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