'use strict'

module.exports = async function (fastify, opts) {
  fastify.put('/:id', async function (request, reply) {
      const result = [
        {'v_id' : 3},
        {'c_name' : '임영웅',
        'count' : 4}, 
        {'c_name' : '이희성',
        'count' : 3},
        {'c_name' : '주형우',
        'count' : 6}
      ]

      reply
        .code(200)
        .header('content-type','application/json')
        .send('업데이트완료')
    

  })
}
