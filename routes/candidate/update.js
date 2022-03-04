'use strict'

module.exports = async function (fastify, opts) {
  //관리자가 특정 투표의 특정 후보자 정보를 추가함
  fastify.post('/:id', async function (request, reply) {
    // 만약에 users의 admin이 true라면, -> 조건문 추가
    const requestInfo = {
        "c_name": request.c_name,
        "v_id": request.v_id,
        "image": request.image,
        "desc": request.desc
    }
    
    reply
        .code(201)
        .header("Content-Type", "application/json")
        .send({c_id : 5})
  })

  //사용자가 특정 투표의 특정 후보를 투표함
  fastify.post
}
