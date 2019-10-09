function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}
//Listen for input
canvas.addEventListener('mousedown', function (event) {
    //on mousedown, gravity is set to 0
    lastDownTarget = event.target;
    gravity = 0;
    document.addEventListener("mouseup", function () {
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

window.addEventListener('keydown', function (e) {
    var key = e.keyCode;
    if (key === 13) // enter key
    {
        togglePause();
    }
});

window.onload = init;

//Game variables
var paused = true;

//Player Variables
playerX = 70;
playerY = 300;
playerRadius = 30;
var score = 0;
playerXCentered = playerX - playerRadius;

//Gravity Variables
var vy = (Math.random() * -10) - 5;
var gravity = 0.5;
var bounce_factor = 0.8;

//Obstacle variables/function
var pillarHeight = 452;
var pillarWidth = 50;
var gap = 150;
var constant = pillarHeight + gap
var pillarSpeed = 2.0;
var pillarX;

var pillar = [];

pillar[0] = {
    x: canvas.width,
    y: 0
}

var oldTimeStamp = 0;

function gameLoop(timeStamp) {
    //calculate the time passed
    var secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp

    if (!paused) {
        update(secondsPassed);
    }
    
    draw();

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function update() {

    applyGravity();

}

function draw() {
    //clear screen before every frame
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //draw the ball
    colorCircle(playerX, playerY, playerRadius, "white")

    //draw the pillars
    for (var i = 0; i < pillar.length; i++) {
        colorRect(pillar[i].x, pillar[i].y, pillarWidth, pillarHeight, "white")
        colorRect(pillar[i].x, pillar[i].y + constant, pillarWidth, pillarHeight, "white")
        //move the pillars left
        pillar[i].x -= pillarSpeed;
        //IF the pillar is nearly off the canvas

        

        if (pillar[i].x == 100) {
            //push the these attributes to the pillar array
            pillar.push({
                x: canvas.width,
                //The code below will make each pillar a different height, by using the Math.random() method
                y: Math.floor(Math.random() * pillarHeight) - pillarHeight
            });
        }
        //detect collision, reload canvas if player hits obstacle
        if ((playerX - playerRadius) + (playerRadius * 1.65) >= pillar[i].x && (playerX - playerRadius) <= pillar[i].x + pillarWidth && (playerY - playerRadius <= pillar[i].y + pillarHeight || playerY + playerRadius >= pillar[i].y + constant)) {
            alert(`GAME OVER, YOU SCORED: ${score}`);
            document.location.reload();
            // clearInterval(interval); // Needed for Chrome to end game
        }
        //if the pillar has passed, increment the score
        if (pillar[i].x == playerX) {
            score++;

        }
        console.log(pillarSpeed);
    }

    ctx.fillStyle = "#000";
    ctx.font = "20px Verdana";
    ctx.fillText("Score : " + score, canvas.width / 2 - 50, 25);

    
}

console.log(pillarX);
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