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

var io = require('socket.io').listen(8667);

io.sockets.on('connection', function (socket) {
    console.log("send img=====================================");
    socket.on('get_filter_image', function (data) {
        console.log(data);
        //
        img_url = data.img_url;
        fun_return =  function(r) {
            socket.emit('get_filter_image_callback', r);
        };


        downImage(img_url, 'google.png', fun_return);
    });
});


canvas = require('canvas');
var Canvas = require('canvas');
canvas  = new Canvas(1000,10000);
var fs = require('fs'),
request = require('request');



function drawBase64ToCanvas(src, canvas, callback) {
    var ctx=canvas.getContext("2d");
    img=new Canvas.Image;
    img.src = src;
    img.onload=function(){
        canvas.width=img.width;
        canvas.height=img.height;
        ctx.strokeStyle = 'rgba(0,0,0,0.5)';


        //      ctx.drawImage(img,0,0,img.width,img.height);
        //      ctx.fillStyle='rgba(255,0,0,0.5)';
        //      ctx.globalAlpha=0.2;
        //      ctx.fillRect(0,0,img.width,img.height);

        dataObj = {};
        data1 = {};
        data2 = {};
        data3 = {};

        n=0;
        ctx.drawImage(img,img.width*n ,0,img.width , img.height);
        ctx.fillStyle='rgba(255,0,0,0.5)';
        ctx.globalAlpha=0.2;
        ctx.fillRect(img.width*n,0, img.width , img.height);
        imgDataUrl =  canvas.toDataURL();
        data1.url = imgDataUrl;
        data1.desc = 'red';
        dataObj.a =  data1;

        n=0;
        ctx.drawImage(img,img.width*n ,0,img.width , img.height);
        ctx.fillStyle='rgba(0,255,0,0.5)';
        ctx.globalAlpha=0.2;
        ctx.fillRect(img.width*n,0, img.width , img.height);
        imgDataUrl =  canvas.toDataURL();
        data2.url = imgDataUrl;
        data2.desc = 'green';
        dataObj.b =  data2;



        n=0;
        ctx.drawImage(img,img.width*n ,0,img.width , img.height);
        ctx.fillStyle='rgba(0,0,255,0.5)';
        ctx.globalAlpha=0.2;
        ctx.fillRect(img.width*n,0, img.width , img.height);
        imgDataUrl =  canvas.toDataURL();
        data3.url = imgDataUrl;
        data3.desc = 'blue';
        dataObj.c =  data3;










///        n=1;
///        ctx.drawImage(img,img.width*n ,0,img.width , img.height);
///        ctx.fillStyle='rgba(0,255,0,0.5)';
///        ctx.globalAlpha=0.2;
///        ctx.fillRect(img.width*n,0, img.width , img.height);
/// imgDataUrl =  canvas.toDataURL();
///        data = data+"<img src='"+imgDataUrl+"'>";
///
///
///
///
///        n=2;
///        ctx.drawImage(img,img.width*n ,0 ,img.width , img.height);
///        ctx.fillStyle='rgba(0,0,255,0.5)';
///        ctx.globalAlpha=0.2;
///        ctx.fillRect(img.width*n,0 , img.width , img.height);
///        imgDataUrl =  canvas.toDataURL();
///        data = data+"<img src='"+imgDataUrl+"'>";
///
///
///
///
///        //var data = canvas.toDataURL();
///
///        console.log("RUNNING::base64");
///        //console.log("<img src='"+data+"'>");
///
        if (callback) {
            callback(dataObj);
        }

    }
    img.src = src;

};
function downImage(uri, filename, callback){
    request.head(uri, function(err, res, body){
        var picStream = fs.createWriteStream(filename);
        var r = request(uri).pipe(picStream);
        console.log("RUNNING::picStream.on");
        picStream.on('close', function () {
            drawBase64ToCanvas(filename, canvas,callback);
        });

    });
};


//downImage('https://www.google.com/images/srpr/logo3w.png', 'google.png');

//downImage('https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-prn2/1441378_10151758856682393_61030828_n.jpg', 'google.png');

//downImage('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDyCiVVWJ2KnH5wQZyQCwqBc8rAAlolvq7-jGldiTpNfykmGxByA', 'google.png');
//drawBase64ToCanvas("google.png", canvas);





