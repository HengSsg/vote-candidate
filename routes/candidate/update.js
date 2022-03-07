module.exports = async function (fastify, opts) {
  fastify.put('/:id', async function (request, reply){
    const Candidate = this.mongo.db.collection('Candidate')
    const id = this.mongo.ObjectId(request.params.id)
    const filter = {'_id' : id}
    const body = await Candidate.findOne(filter)
    const replacement = {'v_id' : body.v_id, 'c_name' : body.c_name, 'image' : body.image, 'desc' : body.desc, 'count' : parseInt(body.count) + 1}

 
    const result = await Candidate.findOneAndReplace(filter, replacement)
    

      reply
        .code(200)
        .header('content-type','application/json')
        .send({'c_name' : result.value.c_name})
    

  })
}
