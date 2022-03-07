module.exports = async function (fastify, opts) {
  fastify.put('/:id', async function (request, reply){
    const Candidate = this.mongo.db.collection('Candidate')
    const id = this.mongo.ObjectId(request.params.id)
    const filter = {'_id' : id}
    const count = await Candidate.findOne(filter)
    const replacement = {'count' : parseInt(count.count) + 1}

    console.log('*******replacement++++++',replacement)
    const result = await Candidate.findOneAndReplace(filter, replacement)
    

      reply
        .code(200)
        .header('content-type','application/json')
        .send(result)
    

  })
}
