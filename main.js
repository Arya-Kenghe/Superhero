
var canvas = new fabric.Canvas('myCanvas');

var player = "";
var block = "";

px = 10;
py = 10;

bw = 30;
bh = 30;

function player_sprite(){
    fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png",function(Img){
        player = Img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({
            top:py,
            left:px
        });
        canvas.add(player);
    });
}
function block_sprite(block_image){
    fabric.Image.fromURL(block_image,function(Img){
        block = Img;
        block.scaleToWidth(bw);
        block.scaleToHeight(bh);
        block.set({
            top:py,
            left:px
        });
        canvas.add(block);
    });
}

window.addEventListener("keydown",a);

function a(e){
    key = e.keyCode;
    if (e.shiftKey == true && keyPressed == '65'){
        bw = bw + 10;
        bh = bh + 10;
        console.log("The key press is shift+a");
        document.getElementById("cw").innerHTML = bw;
        document.getElementById("ch").innerHTML = bh;
    }
    if (e.shiftKey && keyPressed == '90'){
        bw = bw - 10;
        bh = bh - 10;
        console.log("The key press is shift+z");
        document.getElementById("cw").innerHTML = bw;
        document.getElementById("ch").innerHTML = bh;
    }
if(key == '82'){
    block_sprite('https://i.postimg.cc/8s8BGtwS/thor-right-hand.png');
    console.log("r");
}
if(key == '76'){
    block_sprite('https://i.postimg.cc/rw7ckW29/captain-america-left-hand.png');
    console.log("l");
}
if(key == '72'){
    block_sprite('https://i.postimg.cc/KzF6GDqt/hulk-legs.png');
    console.log("h");
}
if(key == '70'){
    block_sprite('https://i.postimg.cc/hGnyTPLB/ironman-face.png');
    console.log("f");
}
if(key == '66'){
    block_sprite('https://i.postimg.cc/FscwL6M0/spiderman-body.png');
    console.log("b");
}
if(key == '38'){
    up();
    console.log("up");
}
if(key == '40'){
    down();
    console.log("down");
}
if(key == '37'){
    left();
    console.log("left");
}
if(key == '39'){
    right();
    console.log("right");
}
}
function left(){
    if (px>=0) {
        px=px-bw;
        canvas.remove(player);
        player_sprite();
    }
}
function right(){
    if (px<=850) {
        px=px+bw;
        canvas.remove(player);
        player_sprite();
    }
}
function up(){
    if (py>=0) {
        py=py-bh;
        canvas.remove(player);
        player_sprite();
    }
}
function down(){
    if (py<=460) {
        py=py+bh;
        canvas.remove(player);
        player_sprite();
    }
}