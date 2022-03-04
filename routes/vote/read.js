'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    
    const result {
        [{
            v_id: 7,
            title: 미스터트롯,
            body:[
                 {
                      "후보자" : "임영웅"
                      "후보자" : 이희성
                      "후보자" : 박형석
                      "후보자" : 주형우
                    }
                    ]
            },
            {
                v_id: 3,
                title: 슈퍼스타K
                body:[
            {   
                "후보자" : 이희성
                "후보자" : 박형석
                "후보자" : 주형우
                "후보자" : 이호용
            }]
              }
            ]
    }
  })
}