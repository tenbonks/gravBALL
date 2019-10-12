function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}
//Listen for input
//important that this code is listening for event in canvas element, as it sets the target for key input to register
canvas.addEventListener('mousedown', function (event) {
    gameStarted = true;
    if (paused === true && gameLost === false) {
        togglePause();
    }
    
    //on mousedown, gravity is set to 0
    lastDownTarget = event.target;
    gravity = 0;
    canvas.addEventListener("mouseup", function () {
        //on mouse up, gravity is reverted back to 0.5
        gravity = 0.5;
    });

}, false);

//jQuery selection used to disable the context menu within the canvas
$('body').on('contextmenu', '#canvas', function(e){ return false; });

window.addEventListener('keydown', function (e) {
    //if the last target was canvas, allow key input, NOTE KEYCODE 32 is SPACEBAR 
    if (lastDownTarget == canvas && e.keyCode == 32) { 
        //the line below disables default input to html document, this stops page scroll when spacebar is pressed
        e.preventDefault();
        //on keydown, gravity is set to 0
        gravity = 0;
        document.addEventListener("keyup", function () {
            //on keyup, gravity is reverted to 0.5
            gravity = 0.5;
        });
    }
}, false);

window.onload = init;

//Game variables
var paused = true;
var gameStarted = false;
var gameLost = false;
var score = 0;
var scoreLast = 0;
var highScore = 0;


//Player Variables
var playerX = 70;
var playerY = 300;
var playerRadius = 30;

//Gravity Variables
var vy = (Math.random() * -10) - 5;
var gravity = 0.5;
var bounce_factor = 0.8;

//Obstacle variables/function
var pillarHeight = 452;
var pillarWidth = 50;
var gap = 150;
var constant = pillarHeight + gap
var pillarSpeed = 5;
var pillarX;
var pillarY;

var pillar = [];

pillar[0] = {
    x: canvas.width,
    y: 0
}

//This variable is for the gameLoop function
var oldTimeStamp = 0;

//for loop, allows for new pillars to be pushed to
for (var i = 0; i < pillar.length; i++) {
    pillarX = pillar[i].x
    pillarY = pillar[i].y
}

function movePillars() {
    //move the pillars left
    pillarX -= pillarSpeed;
    //IF the pillar is nearly off the canvas
    if (pillarX == (0 - pillarWidth)) {

        pillarX = canvas.width;
        pillarY = Math.floor(Math.random() * pillarHeight) - pillarHeight

    }
}

function detectCollision() {
    //detect collision, reload canvas if player hits obstacle
    if ((playerX - playerRadius) + (playerRadius * 1.65) >= pillarX && (playerX - playerRadius) <= pillarX + pillarWidth && (playerY - playerRadius <= pillarY + pillarHeight || playerY + playerRadius >= pillarY + constant)) {

        
        togglePause();
        if (scoreLast >= highScore){
            highScore = scoreLast;
        }
        scoreLast = score;
        score = 0
        pillarX = canvas.width
        pillarY = Math.floor(Math.random() * pillarHeight) - pillarHeight
    }
}

function incrementScore() {
    //if the pillar has passed, increment the score
    if (pillarX == playerX - playerRadius - pillarWidth) {
        score++;
    }
}

//THE GAMELOOP, this function calls the draw functions, and also the update function, over and over again making the pixels move
function gameLoop(timeStamp) {
    //calculate the time passed
    var secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp

    if (!paused) {
        update(secondsPassed);

        drawGame();
    } else if (paused && gameStarted === false) {
        drawStart();
    } else {
        drawLose();
    }

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);

}

function update() {
    applyGravity();
    movePillars();
    incrementScore();
    detectCollision();
}

function drawGame() {
    //clear screen before every frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //draw the ball
    colorCircle(playerX, playerY, playerRadius, "white")

    //draw the pillars
    colorRect(pillarX, pillarY, pillarWidth, pillarHeight, "white")
    colorRect(pillarX, pillarY + constant, pillarWidth, pillarHeight, "white")

    //draw the score
    ctx.fillStyle = "#fff";
    ctx.font = "20px Righteous";
    ctx.fillText("Score : " + score, canvas.width / 2 - 50, 25);

    //draw highscore
    ctx.fillStyle = "000";
    ctx.font = ""
}

//When the page is loaded the canvas will display information to prompt the user to click the canvas
function drawStart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#fff";
    ctx.font = "20px Righteous";
    ctx.fillText("Click to Start", canvas.width / 2 - 70, canvas.height / 2 - 10);
}

//If the ball collides this screen will appear, it is a losing splash screen
function drawLose() {
    
    gameLost === true;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#fff";
    ctx.font = "25px Righteous";
    
    if(scoreLast <= highScore){
    ctx.fillText("You Lose!", canvas.width / 2 - 65, canvas.height / 2 - 100);
    }else{
        ctx.fillText("New High Score!", canvas.width / 2 - 95, canvas.height / 2 - 100);
    }
    ctx.font = "20px Righteous";
    ctx.fillText(`Scored: ${scoreLast}`, canvas.width / 2 - 50, canvas.height / 2 - 35);
    ctx.fillText(`High Score: ${highScore}`,canvas.width / 2 - 70, canvas.height / 2 - 0)
    ctx.fillText(`Click To Restart`,canvas.width / 2 - 75, canvas.height - 200)

    
}

//A pausing function, it is used in conjunction with the gameLoop to help implement the game states
function togglePause() {
    if (!paused) {
        paused = true;
    } else if (paused) {
        paused = false;
    }
}

//Applies gravity to the playersY coordinate, also will bounce off the floor depending on momentum the ball hit
function applyGravity() {
    playerY += vy;
    vy += gravity;

    //if the player hits the bottom of the canvas
    if (playerY + playerRadius > canvas.height) {
        //player Y cant exceed the canvas height - playerRadius, this stops it from going off screen
        playerX = playerX
        playerY = canvas.height - playerRadius

        //velocity needs to be reset otherwise it will stick to the floor
        vx = 0;
        vy *= -bounce_factor;
    //if the player hits the top of canvas  
    } else if (playerY - playerRadius < 0) {
        playerX = playerX
        playerY = 0 + playerRadius;
        //the same as the code above, this time player Y cant exceed the top, and will bounce from the top
        vx = 0;
        vy *= -bounce_factor;
    }
}

//HELPER FUNCTIONS AT BOTTOM OF SCRIPT
//Helper function to draw a CIRCLE
function colorCircle(centerX, centerY, radius, drawColor) {
    ctx.fillStyle = drawColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    ctx.fill();
}
//Helper function to draw a RECTANGLE 
function colorRect(leftX, topY, width, height, drawColor) {
    ctx.fillStyle = drawColor;
    ctx.fillRect(leftX, topY, width, height);
}

