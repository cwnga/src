

canvas = require('canvas');
var Canvas = require('canvas');
canvas  = new Canvas(200,200);

function drawBase64ToCanvas(src, canvas) {
    var ctx=canvas.getContext("2d");

    img=new Canvas.Image;
 img.src = src;
    img.onload=function(){
console.log('hih');
        canvas.width=img.width;
        canvas.height=img.height;
        ctx.drawImage(img,0,0,img.width,img.height);
        var data = canvas.toDataURL();
        console.log(data);

    }
    img.src = src;

};
drawBase64ToCanvas("https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-frc3/1459854_10202413712962668_616214785_n.jpg", canvas);



//var Canvas = require('canvas')
//  , canvas = new Canvas(200,200)
//  , ctx = canvas.getContext('2d');
//
//ctx.font = '30px Impact';
//ctx.rotate(.1);
//ctx.fillText("Awesome!", 50, 100);
//
//var te = ctx.measureText('Awesome!');
//ctx.strokeStyle = 'rgba(0,0,0,0.5)';
//ctx.beginPath();
//ctx.lineTo(50, 102);
//ctx.lineTo(50 + te.width, 102);
//ctx.stroke();
//
//console.log('<img src="' + canvas.toDataURL() + '" />');
//

var fs = require('fs'),
    request = require('request');

var download = function(uri, filename){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename));
  });
};

download('https://www.google.com/images/srpr/logo3w.png', 'google.png');
