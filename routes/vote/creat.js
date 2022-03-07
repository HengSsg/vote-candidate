'use strict'

module.exports = async function (fastify, opts) {
  fastify.post('/', async function (request, reply) {
        //const requestbody = await createOne(this.mongo, request.body)
        
        const Candidate = this.mongo.db.collection('Vote')
        const body = request.body
        const result = await Candidate.insertOne(body) 
        if(result.body==={}){
          reply
          .code(404)
          .header('content-type','application/json')
          .send('후보자 정보를 입력해 주세요')
        }
        else{
          reply
          .code(200)
          .header('content-type','application/json')
          .send(result)
        }
    })

}
