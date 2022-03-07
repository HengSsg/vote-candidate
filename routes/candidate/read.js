'use strict'

module.exports = async function (fastify, opts) {
    fastify.get('/', async function(request, reply){
        const candiates = this.mongo.db.collection('candidate')
        const result = await candiates.find({}).toArray()

        reply
            .code(200)
            .header('Content-Type', 'application/json')
            .send(result)
    })
    
    fastify.get('/:id', async function(request, reply) {
        const candiates = this.mongo.db.collection('candidate')
        const c_id = this.mongo.ObjectId(request.params.id)
        const result = await candiates.findOne(c_id, candiates)

        reply
            .code(200)
            .header('Content-Type', 'application/json')
            .send(result)
    })
}
