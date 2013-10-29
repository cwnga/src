var io = require('socket.io').listen(8081);
users = [];
io.sockets.on('connection', function (socket) {

    socket.on('set_message', function (data) {
        console.log(data);
        if (data.from != undefined) {

            if (users[data.from] != undefined) {
                        console.log("defined");
                        console.log("defined");
                        console.log("defined");
                        console.log(users);;
                //users[data.from][socket.id] = socket;
            } else {

                        console.log("undefined");
                        console.log("undefined");
                        console.log("undefined");
                users[data.from]=  new Array();
                // users[data.from][socket.id] = socket;

            }
            console.log(users[data.from].length);
            users[data.from][socket.id] = socket;
            console.log(users[data.from].length);
        //io.sockets.socket(userID)

            for (id in users[data.from]) {
                console.log("id:"+id);
                console.log(data);
                users[data.from][id].emit('get_message', data);
            }
            if (users[data.to] != undefined) {
            } else {
                users[data.to]=[];
            }


            for (id in users[data.to]) {
                users[data.to][id].emit('get_message', data);
            }

        }
    });
});



