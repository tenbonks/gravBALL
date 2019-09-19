function colorCircle(centerX, centerY, radius, drawColor) {
    ctx.fillStyle = drawColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    ctx.fill();
}

function colorRect(leftX, topY, width, height, drawColor){
    ctx.fillStyle = drawColor;
    ctx.fillRect(leftX, topY, width, height);
}

//Listen for input
document.addEventListener('mousedown', function(event) {
    lastDownTarget = event.target;
    gravity = 0;
    document.addEventListener("mouseup", function(){
        gravity = 0.5;
    });
    
}, false);

document.addEventListener('keydown', function(event) {
    if(lastDownTarget == canvas) {
        gravity = 0;
        document.addEventListener("keyup", function(){
            gravity = 0.5;
        });
    }
}, false);

window.onload = init;

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}


//Player Variables
playerX = 70;
playerY = 300;
playerRadius = 30;

//Gravity Variables
var vy = (Math.random()* - 10) - 5;
var gravity = 0.5;
var bounce_factor = 0.8;

//Obstacle variables/function
var pillarHeight = 450;
var pillarWidth = 50;
var gap = 150;
var constant = pillarHeight + gap

var pillar = [];

pillar[0] = {
    x : canvas.width,
    y : 0
}


var oldTimeStamp = 0;

function gameLoop(timeStamp){
    //calculate the time passed
    var secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp

    update(secondsPassed);
    draw();

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function update(){
    
    applyGravity();
    
    
}

function draw(){
    //clear screen before every frame
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    //draw the ball
    colorCircle(playerX, playerY, playerRadius, "white")

    //draw the pillars
    for(var i = 0; i < pillar.length; i++){
        colorRect(pillar[i].x, pillar[i].y, pillarWidth, pillarHeight, "white")  
        colorRect(pillar[i].x, pillar[i].y+constant, pillarWidth, pillarHeight, "white")
        
        pillar[i].x-= 2;  
        
        if(pillar[i].x == 100) {
            pillar.push({
                x : canvas.width,
                y : Math.floor(Math.random()*pillarHeight)-pillarHeight
            });
        }
    } 
    
}

function applyGravity() {

    
    
    playerY += vy;

    vy += gravity;

    if(
        playerX + playerRadius > canvas.width ||
        playerX + playerRadius < 0 ||
        playerY + playerRadius > canvas.height ||
        playerY + playerRadius < 0
    ){
        playerX = playerX
        playerY = canvas.height - playerRadius

        //velocity needs to be reset otherwise it will stick to the floor
        vx = 0;
        vy *= -bounce_factor;
    }

}         
