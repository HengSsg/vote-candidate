module.exports = async function (app, opts) {
    app.register(require('./creat'))
    app.register(require('./delete'))
    app.register(require('./read'))
 
}