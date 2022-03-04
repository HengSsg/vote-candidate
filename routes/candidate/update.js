'use strict'

module.exports = async function (fastify, opts) {
  //관리자가 특정 투표의 특정 후보자 정보를 추가함
  fastify.post('/:id', async function (request, reply) {
    // 만약에 users의 admin이 true라면, -> 조건문 추가 할 것.
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
  fastify.put('/:c_id', async function (request, reply){
    //요청 바디 내용
    const requestInfo = {
        "v_id": request.v_id,
        "candidate_list": {
            "c_id": request.c_id,
            "c_name": request.c_name,
            "count": request.count
        }
    }
    //투표를 했으니 카운트 + 1 해줌
    requestInfo.candidate_list.count = requestInfo.candidate_list.count + 1

    reply
        .code(200)
        .header("Content-Type", "application/json")
        .send("임영웅")
})
}
