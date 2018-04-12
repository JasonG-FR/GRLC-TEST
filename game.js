var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 1200;
canvas.height = 833;
var context = canvas.getContext("2d");

var Dice_Size=200;
var X=canvas.width/2-Dice_Size/2;
var Y=canvas.height/2-Dice_Size/2;
var Dice_Picture_1 = new Image();Dice_Picture_1.src = "Images/1.jpg";
var Dice_Picture_2 = new Image();Dice_Picture_2.src = "Images/2.jpg";
var Dice_Picture_3 = new Image();Dice_Picture_3.src = "Images/3.jpg";
var Dice_Picture_4 = new Image();Dice_Picture_4.src = "Images/4.jpg";
var Dice_Picture_5 = new Image();Dice_Picture_5.src = "Images/5.jpg";
var Dice_Picture_6 = new Image();Dice_Picture_6.src = "Images/6.jpg";

var Rand=0;
var Arr=[];
var Arr_Size=0;

var i;

function GenerateRandomNum(){
	Rand=Math.floor((Math.random()*6)+1);
    Arr[Arr_Size] = Rand;
    Arr_Size++;
}

window.addEventListener("mousedown", function (args) {
    GenerateRandomNum();
    
}, false);


function draw() {	
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.globalAlpha = 1;    				            

    if(Rand == 0){
        context.fillStyle = "rgba(0, 0, 0, 0.29)";
        context.font = "24px Arial";
        context.fillText("Click to generate Number", X, Y);
    }
    if(Rand == 1){
        context.drawImage(Dice_Picture_1,X,Y,Dice_Size,Dice_Size);
    }
    if(Rand == 2){
        context.drawImage(Dice_Picture_2,X,Y,Dice_Size,Dice_Size);
    }
    if(Rand == 3){
        context.drawImage(Dice_Picture_3,X,Y,Dice_Size,Dice_Size);
    }
    if(Rand == 4){
        context.drawImage(Dice_Picture_4,X,Y,Dice_Size,Dice_Size);
    }
    if(Rand == 5){
        context.drawImage(Dice_Picture_5,X,Y,Dice_Size,Dice_Size);
    }
    if(Rand == 6){
        context.drawImage(Dice_Picture_6,X,Y,Dice_Size,Dice_Size);
    }
    
    
    context.fillStyle = "rgba(0, 0, 0, 0.29)";
    context.font = "24px Arial";
    context.fillText("Generated Numbers: " + Rand , 10, 24);
    
    for(i=0;i<Arr_Size;i++){
        context.fillStyle = "rgba(0, 0, 0, 0.29)";
        context.font = "24px Arial";
        context.fillText(" ," + Arr[i], 20*i , 50);
    }
    
    requestAnimationFrame(draw);
    context.beginPath();
    
    context.closePath();
    context.stroke();
}	
draw();	