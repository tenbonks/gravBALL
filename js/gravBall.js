function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}
//Listen for input
//important that this code is listening for event in canvas element, as it sets the target for key input to register
canvas.addEventListener('mousedown', function () {
    gameStarted = true;
    if (paused === true && muted === false) {
        GAME_START.play();
    }
    if (paused === true && gameLost === false) {
        togglePause();
    }


    //on mouse down, set gravity to 0
    gravity = 0;
    canvas.addEventListener("mouseup", function () {
        //on mouse up, gravity is reverted back to 0.5
        gravity = 0.5;
    });

}, false);

canvas.addEventListener('touchstart', function () {
    gameStarted = true;
    if (paused === true && gameLost === false) {
        togglePause();

        GAME_START.play();

    }


    //on touchstart, gravity is set to 0
    gravity = 0;
    canvas.addEventListener("touchend", function () {
        //on finger up, gravity is reverted back to 0.5
        gravity = 0.5;
    });

}, false);

//jQuery selection used to disable the context menu within the canvas
$('body').on('contextmenu', '#canvas', function (e) {
    return false;
});



$("#mute-btn").on("click", function () {
    toggleMute();
});

$("#fullscreen-btn").on("click", fullscreen);

window.onload = init;

function fullscreen() {
    if (canvas.webkitRequestFullScreen) {
        canvas.webkitRequestFullScreen();
    } else {
        canvas.mozRequestFullScreen();
    }
}



//Audio Variables

var SCORE_BEEP = new Audio("./assets/audio/score_beep.wav");
var COLLIDE_BEEP = new Audio("./assets/audio/lose.wav");
var GAME_START = new Audio("./assets/audio/start.wav");
var BALL_BOUNCE = new Audio("./assets/audio/ball-bounce.wav");

//Game variables
var paused = true;
var muted = false;
var gameStarted = false;
var gameLost = false;
var score = 0;
var scoreLast = 0;
var highScore = 0;

//Set a a local storage item to the key "highScore" and a value of "0", IF it can't retrieve the item "highScore"
if (!localStorage.getItem("highScore")) {
    localStorage.setItem("highScore", 0);
}

//Player Variables
var playerX = 70;
var playerY = 300;
var playerRadius = 30;

//Gravity Variables
var vy = (Math.random() * -10) - 5;
var gravity = 0;
var bounce_factor = 0.8;

//Obstacle variables/function
var pillarHeight = 452;
var pillarWidth = 50;
var gap = 220;
var constant = pillarHeight + gap;
var pillarSpeed = 5;
var pillarX;
var pillarY;

var pillar = [];

pillar[0] = {
    x: canvas.width,
    y: -250
};

//This variable is for the gameLoop function
var oldTimeStamp = 0;

//for loop, allows for new pillars to be pushed to
for (var i = 0; i < pillar.length; i++) {
    pillarX = pillar[i].x;
    pillarY = pillar[i].y;
}

function movePillars() {
    //move the pillars left
    pillarX -= pillarSpeed;
    //IF the pillar is nearly off the canvas
    if (pillarX == (0 - pillarWidth)) {

        gap--;
        pillarX = canvas.width;
        pillarY = Math.floor(Math.random() * pillarHeight) - pillarHeight;

    }
}

function detectCollision() {
    //detect collision, reload canvas if player hits obstacle
    if ((playerX - playerRadius) + (playerRadius * 1.65) >= pillarX && (playerX - playerRadius) <= pillarX + pillarWidth && (playerY - playerRadius <= pillarY + pillarHeight || playerY + playerRadius >= pillarY + constant)) {

        if (muted === false) {
            COLLIDE_BEEP.play();
        }
        //if the player collides, pauses the drawGame function and will run the drawLose function
        togglePause();

        //then set scoreLast to what was just scored, this is displayed in the drawLose function
        scoreLast = score;
        checkHighScore();

        //reset the score to 0, needs to be after the line of code above
        score = 0;
        //reset the pillars to end of canvas and the gap will be set at a random height
        pillarX = canvas.width;
        pillarY = Math.floor(Math.random() * pillarHeight) - pillarHeight;
    }
}

function incrementScore() {
    //if the pillar has passed, increment the score
    if (pillarX == playerX - playerRadius - pillarWidth) {
        score++;
        if (muted === false)
            SCORE_BEEP.play();
    }
}

function checkHighScore() {
    if (scoreLast >= parseInt(localStorage.getItem("highScore"))) {
        highScore = scoreLast;
        localStorage.setItem("highScore", scoreLast);
    }
}

//THE GAMELOOP, this function calls the draw functions, and also the update function, over and over again making the pixels move
function gameLoop(timeStamp) {
    //calculate the time passed
    var secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    //this always check the high score in localStorage
    localHighScore = parseInt(localStorage.getItem("highScore"));

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
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw the ball
    colorCircle(playerX, playerY, playerRadius, "white");

    //draw the pillars
    colorRect(pillarX, pillarY, pillarWidth, pillarHeight, "white");
    colorRect(pillarX, pillarY + constant, pillarWidth, pillarHeight, "white");

    //draw the score
    ctx.fillStyle = "#fff";
    ctx.font = "20px Righteous";
    ctx.fillText("Score : " + score, canvas.width / 2 - 45, 25);

}

//When the page is loaded the canvas will display information to prompt the user to click the canvas
function drawStart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "20px Righteous";
    ctx.fillText("Click to Start", canvas.width / 2 - 60, canvas.height / 2 - 10);
    ctx.fillText("High Score: " + localHighScore, canvas.width / 2 - 65, canvas.height / 2 + 20);
    ctx.fillText("View Controls Below", canvas.width / 2 - 90, canvas.height - 20);

    isItMute();

}

//If the ball collides this screen will appear, it is a losing splash screen
function drawLose() {
    gameLost === true;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#fff";
    ctx.font = "30px Righteous";
    ctx.fillText("Oops!", canvas.width / 2 - 40, canvas.height / 2 - 75);

    ctx.font = "20px Righteous";
    ctx.fillText(`Scored: ${scoreLast}`, canvas.width / 2 - 40, canvas.height / 2 - 35);
    ctx.fillText(`High Score: ${localHighScore}`, canvas.width / 2 - 65, canvas.height / 2 - 0);
    ctx.fillText(`Click To Restart`, canvas.width / 2 - 75, canvas.height - 200);

    isItMute();

}

//A pausing function, it is used in conjunction with the gameLoop to help implement the game states
function togglePause() {
    if (!paused) {
        paused = true;
    } else if (paused) {
        paused = false;
    }
}

function toggleMute() {
    if (!muted) {
        muted = true;
    } else if (muted) {
        muted = false;
    }
}

//This will display to the user on the start and lose screen if sound is on or off
function isItMute() {
    if (muted === false) {
        ctx.fillText("Sound On", canvas.width / 2 - 45, 0 + 25);
    } else {
        ctx.fillText("Sound Off", canvas.width / 2 - 45, 0 + 25);
    }
}

//Applies gravity to the playersY coordinate, also will bounce off the floor depending on momentum the ball hit
function applyGravity() {
    playerY += vy;
    vy += gravity;

    //if the player hits the bottom of the canvas
    if (playerY + playerRadius > canvas.height) {
        //player Y cant exceed the canvas height - playerRadius, this stops it from going off screen
        playerX = playerX;
        playerY = canvas.height - playerRadius;

        if (muted === false) {
            BALL_BOUNCE.play();
        }

        //velocity needs to be reset otherwise it will stick to the floor
        vx = 0;
        vy *= -bounce_factor;
        //if the player hits the top of canvas  
    } else if (playerY - playerRadius < 0) {
        playerX = playerX;
        playerY = 0 + playerRadius;

        if (muted === false) {
            BALL_BOUNCE.play();
        }

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

// Get the canvas element form the page


