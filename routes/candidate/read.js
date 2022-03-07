'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/c_id', async function(request, reply) {
        const candiates = this.mongo.db.collection('candidate')
        const result = await candidate.find({}).toArray()
        const id = this.mongo.ObjectId(request.params.id)

        reply
            .code(200)
            .header('Content-Type', 'application/json')
            .send(result)
    })
}
