function colorCircle(centerX, centerY, radius, drawColor) {
    ctx.fillStyle = drawColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    ctx.fill();
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
var vx = 0;
var vy = (Math.random()* - 10) - 5;
var gravity = 0.5;
var bounce_factor = 0.8;

var oldTimeStamp;
function gameLoop(timeStamp){
    //CODE BELOW FOR DEVELOPMENT, MEASURES + DISPLAYS FPS
    //calculate the number of seconds past since the last frame
    var secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    //calculate fps
    var fps = Math.round(1 / secondsPassed);
    //Draw number to the screen
    ctx.fillStyle = 'rgb(138, 138, 138)';
    ctx.fillRect(0, 0, 150, 50);
    ctx.font = '25px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText("FPS: " + fps, 10, 30);
    //CODE ABOVE FOR DEVELOPMENT, MEASURES + DISPLAYS FPS
    update();
    draw();

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function update(){
    playerX += vx;
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
    console.log(gravity); 
}

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
    
  colorCircle(playerX, playerY, playerRadius, "white")
}

          
