function colorCircle(centerX, centerY, radius, drawColor) {
    ctx.fillStyle = drawColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    ctx.fill();
}

window.onload = init;

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}

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

    draw();

    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

function draw(){
    var randomColor = Math.random() > 0.5? '#ff8080' : '#0099b0';
    
    colorCircle(70, 300, 30, randomColor)
}


