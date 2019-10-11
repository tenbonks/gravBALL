function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}
//Listen for input
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

window.addEventListener('keydown', function (event) {
    //if the last target was canvas, allow key input
    if (lastDownTarget == canvas) {
        //on keydown, gravity is set to 0
        gravity = 0;
        document.addEventListener("keyup", function () {
            //on keyup, gravity is reverted to 0.5
            gravity = 0.5;
        });
    }
}, false);

//this listener will start the game, when the page is loaded it is set to pause, click to set pause to false
canvas.addEventListener('mousedown', function () {


});

window.onload = init;

//Game variables
var paused = true;
var gameStarted = false;
var gameLost = false;


//Player Variables
var playerX = 70;
var playerY = 300;
var playerRadius = 30;
var score = 0;
var playerXCentered = playerX - playerRadius;

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

console.log(gameStarted);

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
        pillarX = canvas.width
        pillarY = Math.floor(Math.random() * pillarHeight) - pillarHeight
        // alert(`GAME OVER, YOU SCORED: ${score}`);
        // reloadGame();

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

    console.log(gameStarted)
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

function drawStart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#fff";
    ctx.font = "20px Righteous";
    ctx.fillText("Click to Start", canvas.width / 2 - 70, canvas.height / 2 - 10);
}

function drawLose() {
    
    gameLost === true;
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "#fff";
    ctx.font = "20px Righteous";
    ctx.fillText("You Lose!", canvas.width / 2 - 50, canvas.height / 2 - 50);
    ctx.fillText(`Scored: ${score}`, canvas.width / 2 - 50, canvas.height / 2 - 25);
}

function togglePause() {
    if (!paused) {
        paused = true;
    } else if (paused) {
        paused = false;
    }

}

function applyGravity() {
    playerY += vy;
    vy += gravity;

    if (playerX + playerRadius > canvas.width ||
        playerX + playerRadius < 0 ||
        playerY + playerRadius > canvas.height
    ) {
        playerX = playerX
        playerY = canvas.height - playerRadius

        //velocity needs to be reset otherwise it will stick to the floor
        vx = 0;
        vy *= -bounce_factor;
    } else if (playerY - playerRadius < 0) {
        playerX = playerX
        playerY = 0 + playerRadius;

        vx = 0;
        vy *= bounce_factor;
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

function reloadGame() {
    location.reload();
}