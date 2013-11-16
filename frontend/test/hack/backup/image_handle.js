

canvas = require('canvas');
var Canvas = require('canvas');
canvas  = new Canvas(1000,10000);
var fs = require('fs'),
    request = require('request');



    function drawBase64ToCanvas(src, canvas) {
    var ctx=canvas.getContext("2d");
    img=new Canvas.Image;
    img.src = src;
    img.onload=function(){
        canvas.width=img.width*3;
        canvas.height=img.height*3;
        ctx.strokeStyle = 'rgba(0,0,0,0.5)';


  //      ctx.drawImage(img,0,0,img.width,img.height);
  //      ctx.fillStyle='rgba(255,0,0,0.5)';
  //      ctx.globalAlpha=0.2;
  //      ctx.fillRect(0,0,img.width,img.height);

n=0;
        ctx.drawImage(img,img.width*n ,0,img.width , img.height);
        ctx.fillStyle='rgba(255,0,0,0.5)';
        ctx.globalAlpha=0.2;
        ctx.fillRect(img.width*n,0, img.width , img.height);



n=1;
        ctx.drawImage(img,img.width*n ,0,img.width , img.height);
        ctx.fillStyle='rgba(0,255,0,0.5)';
        ctx.globalAlpha=0.2;
        ctx.fillRect(img.width*n,0, img.width , img.height);

        n=2;
        ctx.drawImage(img,img.width*n ,0 ,img.width , img.height);
        ctx.fillStyle='rgba(0,0,255,0.5)';
        ctx.globalAlpha=0.2;
        ctx.fillRect(img.width*n,0 , img.width , img.height);








        var data = canvas.toDataURL();
        console.log("<img src='"+data+"'>");

    }
    img.src = src;

};
function downImage(uri, filename){
  request.head(uri, function(err, res, body){

    var picStream = fs.createWriteStream(filename);
    var r = request(uri).pipe(picStream);
    picStream.on('close', function () {
        drawBase64ToCanvas(filename, canvas);});

    });
};


//downImage('https://www.google.com/images/srpr/logo3w.png', 'google.png');

//downImage('https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-prn2/1441378_10151758856682393_61030828_n.jpg', 'google.png');

downImage('https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDyCiVVWJ2KnH5wQZyQCwqBc8rAAlolvq7-jGldiTpNfykmGxByA', 'google.png');
//drawBase64ToCanvas("google.png", canvas);





