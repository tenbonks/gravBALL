# gravBALL-game-component

Howdy, here is a **gravBALL** a game which involves as good amount of reaction speed, mixed with timing.
The goal is to get past the obstacles by manipulating gravity, simply HOLD DOWN LEFT or RIGHT MOUSE BUTTON, or SPACEBAR (click the canvas if it's not registering input via KEY)

**How far will you be able to get?**

**play the game here...** https://tenbonks.github.io/gravBALL/

---

# UX

It is aimed for the casual gamer, who like *physic based reaction games*, such as the classic Helicopter game, well... This is like that, but with a twist. 

The website consits of simply the title, the game, a information box displaying controls, and a footer. the website is essentialy a landing page so no navigation is required, meaning there is no serious navigation through the site, other than getting straight to the game, the only navigation the user will need to take is scroll up or down.

I gave the user the option to conatact me with the pretense of wanting to report a bug, or contact me for potential collaboration, this is in the footer, and if they wish to proceed, they are prompted to click "Contact Me" button, on doing this a modal will appear at the forefront of the DOM. with the fields required layed out in a clean and appealing fashion.

As a Gamer, I want to play this game, so I can get a highscore.

As a Developer, I want reach out to a fellow developer, so we can collaborate.

**Wireframe/Mockup can be found in the files of this repository, under the folder "Wireframe/Mockup".**

---

# Features

1.An intuitive, yet simple control mechanism - Simply Hold Down either MOUSE BUTTON, or SPACEBAR to control the ball's gravity, this means you can control how it falls or rises. (Touch control also works)

2.A score tracker - So you can feel the intensity when you're about to beat the high-score

3.A locally set High score, in the user's browser - So the highscore won't be reset if the user closes the game

4.A mute button - To enable the user to play the game without game sounds. information is displayed to the user if sound is on or off.

5.A option to "Contact Me" - For if the user wants to colloborate, or maybe report a bug if found.




---
**Features to implement in the future**

I would like to implement a global highscore, but for that I would need to know more about backend technologies, which is covered later in the course I am currently in.

I would like to implement a scalable canvas screen but after trying its proved difficult to implement, mainly the verticle attribute of the canvas.

---

# Technologies used

HTML, CSS, Javascript, Bootstrap 4 framework, jQuery Framework.

This game was created using HTML5 (HyperTextMarkupLanguage), CSS (Cascading Style Sheets) and JS (JavaScript), all of these play attributes in the actual game. For the actual website I used the Bootstrap 4 framework for positioning of elements, along with css to style the page, I used transparent textures in the css to give the site some character.

1. HTML - Used in the structuring of the index.html file, also plays a role in coordinates of drawn shapes in the canvas

2. CSS - Is used for the styling of the site, it also draws the background to the canvas game.

3. Javascript -  All of the game mechanics are written in Javascript, in fact everything is Javascript within the canvas other than the background, which is css

4. Bootstrap 4 - Used to position elements in the DOM, how I implemented the "Contact Modal", also how I display "Device is too small" message if the screen is under the "sm" breakpoint.

5. Jquery - I used jQuery to access some of the DOM elements, for example when "Mute" is clicked the "toggleMute" function will be ran. 



--- 
# Testing

I planned on using the Jasmine Framework for testing the game, but it is mainly DOM manipulation and requires certain conditions to be met while the game is running, so manual testing seemed to be the best option for me to test *"gravBALL"*

1. gravBall on page load, should display a start screen, if clicked should start to draw the game elements:
    1. Load the website.
    2. Check the canvas element to see if the expected function is running (drawStart).
    3. Click the canvas to see if the gamestate changes as expected (drawGame) is now running.
    4. The boot process of the game is working as expected.

2. does gravBALL change to "Oops!" (drawLose) screen if collision is detected:
    1. Click the canvas to start game.
    2. Let the ball freely bounce until collides the a pillar.
    3. the canvas changes to "Oops" as expected.
    4. The collision mechanic of the game is working as expected.

3. I expect there to be no sound, if mute button has been clicked since the page loaded:
    1. Click the mute button above canvas, and verify the text below the mute button changes to "Sound off".
    2. click the canvas to start game. no starting sound was played when canvas was clicked.
    3. Let the ball freely bounce, no sound on ball bounce.
    4. Let the ball freely bounce and hit pillar, no sound when a collision is detected.
    5. Pass an obstacle and there is no sound to indicate the score incrementing.
    6. Let the ball collide with a pillar to get to the "Oops!" screen, when clicking to restart, no sound is played to indicate the start of the game.
    7. This verifies that the mute button is working as expected once clicked.

4. I expect there to be sound, if mute button has not clicked since page loading:
    1. Upon loading the text underneath the mute button should read "Sound on", this means sound is unmuted by default as expected.
    2. click the canvas to start game. Starting sound was played when canvas was clicked.
    3. Let the ball freely bounce, Sound was played on ball bounce.
    4. Let the ball freely bounce and hit pillar, played sound when a collision is detected.
    5. Pass an obstacle and a sound is played to indicate the score incrementing.
    6. Let the ball collide with a pillar to get to the "Oops!" screen, when clicking to restart, a sound is played to indicate the start of the game.
    7. This verifies that the mute button, by default will be unmuted, and sound will play as expected when conditions are met.

5. Contact form/modal:
    1. Click the "Contact Me" button in the footer of the page.
    2. Try to submit the empty form and verify that an error message "Please fill in this field." appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.
    5. If cancel/X in the top right corner, is clicked the *Modal* will close.
---
# Deployment
---
# Credits
**Content**
**Media**
PaulMorek via freesound | beep when score increments | source - https://freesound.org/people/PaulMorek/sounds/330052/
suntemple via freesound | game lose noise | https://freesound.org/people/suntemple/sounds/253174/
leviclaassen via freesound | noise on game start | https://freesound.org/people/leviclaassen/sounds/107786/
michorvath via freesound | plays on ball bounce | https://freesound.org/people/michorvath/sounds/269718/
Textured Backgrounds via https://www.transparenttextures.com/

**Acknowledgements**
Chris Deleon for basics in canvas game making, via tennis udemy course - this is where I got most of the logic on how to create a game.
Code Explained (Youtube Channel) for inspiration on implementing the pillars, via flappy bird tutorial
Spicy Yoghurt for inspiration on implementing a game loop, via a blog post on spicyyoghurt.com


library/frameworks used
