'use strict'

module.exports = async function (fastify, opts) {

  //사용자가 특정 투표의 특정 후보를 투표함
  fastify.put('/:c_id', async function (request, reply){
  
    const Candidate = this.mongo.db.collection('Candidate')
    const result = await Candidate.findOne(request.params.id, Candidate)
    Candidate.replaceOne(result.candidate_list.count, result.candidate_list.count + 1)

    reply
        .code(200)
        .header("Content-Type", "application/json")
        .send({"c_name":result.candidate_list.name, "count":result.candidate_list.count})
})
}
