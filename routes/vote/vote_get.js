'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    
  const result = 
  [
  {   
      "v_id" : 7,
      "title" : "미스터트롯"
  },
  {
      "v_id" : 3,
      "title" : "슈퍼스타K"
  }
  ]
  reply
  .code(200)
  .header('content-type', 'application/json')
  .send(result)
}
  )
}
