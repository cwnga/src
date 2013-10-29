var io = require('socket.io-client'),
socket = io.connect('localhost', {
    port: 8081
});
socket.on('connect', function () { console.log("socket connected"); });
//socket.emit('private message', { user: 'me', msg: 'whazzzup?' });

socket.on('message',  function (data) { console.log(data); });
