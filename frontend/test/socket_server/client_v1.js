var io = require('socket.io-client'),
socket = io.connect('localhost', {
    port: 8081
});
socket.on('connect', function () { console.log("socket connected");





process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

process.stdin.on('data', function (text) {
    text = util.inspect(text);

    var res = text.split(",");// from,to,message
    console.log(res);

    from = res[1];
    to = res[2];
    message = res[3];
    message_data = {from:from, to:to, message:message};
    console.log(message_data);

    socket.emit('set_message',  message_data);
    //    socket.on('get_message',  function(data) {
        //        console.log('============================');
        //        console.log('from:'+data.from);
        //        console.log('to:'+data.to);
        //        console.log('message:'+data.message);
        //
        //    });


        if (text === 'quit\n') {
            done();
        }
    });

    socket.on('get_message',  function(data) {
        console.log('============================');
        console.log('from:'+data.from);
        console.log('to:'+data.to);
        console.log('message:'+data.message);

    });




    function done() {
        console.log('Now that process.stdin is paused, there is nothing more to do.');
        process.exit();
    }


});
