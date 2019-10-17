# gravBALL-game-component

Howdy, here is a game which involves as good amount of reaction speed, mixed with timing.
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

1. HTML
..* Used in the structuring of the index.html file, also plays a role in coordinates of drawn shapes in the canvas
2. CSS
..* Is used for the styling of the site, it also draws the background to the canvas game.
3. Javascript
..* All of the game mechanics are written in Javascript, in fact everything is Javascript within the canvas other than the background, which is css
4. Bootstrap 4 
..* Used to position elements in the DOM, how I implemented the "Contact Modal", also how I display "Device is too small" message if the screen is under the "sm" breakpoint.
5. Jquery
..* I used jQuery to access some of the dom elements, for example when "Mute" is clicked the "toggleMute" function will be ran. 

--- 
# Testing


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
