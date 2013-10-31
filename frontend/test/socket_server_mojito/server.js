/*jslint anon:true, sloppy:true, nomen:true*/

process.chdir(__dirname);

/*
 * Create the MojitoServer instance we'll interact with. Options can be passed
 * using an object with the desired key/value pairs.
 */
var Mojito = require('mojito');
var app = Mojito.createServer();

// ---------------------------------------------------------------------------
// Different hosting environments require different approaches to starting the
// server. Adjust below to match the requirements of your hosting environment.
// ---------------------------------------------------------------------------

module.exports = app.listen();

//io = require('socket.io').listen(app);
io = require('socket.io').listen(8081);


io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
