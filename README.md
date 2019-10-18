# gravBALL

Howdy, here is a **gravBALL** a game which involves as good amount of reaction speed, mixed with timing.
The goal is to get past the obstacles by manipulating gravity, simply HOLD DOWN LEFT or RIGHT MOUSE BUTTON, or SPACEBAR (click the canvas if it's not registering input via KEY)

**How far will you be able to get?**

# Demo

**A live demo of the site can be found here...** https://tenbonks.github.io/gravBALL/

![Desktop Demo](https://github.com/tenbonks/gravBALL/blob/master/assets/images/gravBALL-Capture.PNG "Desktop Demo")

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

* An intuitive, yet simple control mechanism - Simply Hold Down either MOUSE BUTTON, or SPACEBAR to control the ball's gravity, this means you can control how it falls or rises. (Touch control also works)

- A score tracker - So you can feel the intensity when you're about to beat the high-score

- A locally set High score, in the user's browser - So the highscore won't be reset if the user closes the game

- A mute button - To enable the user to play the game without game sounds. information is displayed to the user if sound is on or off.

- A option to "Contact Me" - For if the user wants to colloborate, or maybe report a bug if found.

Note that the "mute" button was implemented as an outcome from a trial of the site, I sent it out via slack, and as a response to the following feedback - 

"Hello, The website looks great, the game is hard:)!
Just one thing, as a user I could use a sound off/on button." - **Zoli** (A user on Slack)

---
**Features to implement in the future**

I would like to implement a global highscore, but for that I would need to know more about backend technologies, which is covered later in the course I am currently in.

I would like to implement a scalable canvas screen but after trying its proved difficult to implement, mainly the verticle attribute of the canvas.

I would like to implement a full screen option, so the canvas will take up the entire display, this is mainly for small mobile devices as currently the dimensions of the game won't work on mobile, Id like to be able to have it work like an app on mobile, as typically you wouldn't visit a website to play a game on mobile devices.


---

# Technologies used

HTML, CSS, Javascript, Bootstrap 4 framework, jQuery Framework, Adobe XD (for design planning).

This game was created using HTML5 (HyperTextMarkupLanguage), CSS (Cascading Style Sheets) and JS (JavaScript), all of these play attributes in the actual game. For the actual website I used HTML, CSS, the Bootstrap 4 framework for positioning of elements, along with css to style the page, I used transparent textures in the css to give the site some character.

* HTML - Used in the structuring of the index.html file, also plays a role in coordinates of drawn shapes in the canvas

- CSS - Is used for the styling of the site, it also draws the background to the canvas game.

- Javascript -  All of the game mechanics are written in Javascript, in fact everything is Javascript within the canvas other than the background, which is css

- Bootstrap 4 - Used to position elements in the DOM, how I implemented the "Contact Modal", also how I display "Device is too small" message if the screen is under the "sm" breakpoint.

- Jquery - I used jQuery to access some of the DOM elements, for example when "Mute" is clicked the "toggleMute" function will be ran. 

- Adobe XD - I used Adobe XD for the Mockup and Wireframe stage of development, I also returned to it to create a favicon, as it is easy to work on shapes, and you can specify size in pixels, so I could create a nice purpose built favicon, at 32 x 32 px. 



--- 
# Testing

I planned on using the Jasmine Framework for testing the game, but it is mainly DOM manipulation and requires certain conditions to be met while the game is running, so manual testing seemed to be the best option for me to test *"gravBALL"*

I also sent a link out of the deployed site once it was very close to finish, This was sent via slack, during this I had no feedback regarding any issues with the working of the site or game.

<details><summary>CLICK HERE for testing process'</summary>
<p>

1. gravBall on page load, should display a start screen, if clicked should start to draw the game and update the canvas
    1. Load the website.
    2. Check the canvas element to see if the expected function is running (drawStart).
    3. Click the canvas to see if the gamestate changes as expected (drawGame) is now running.
    4. This verifies the boot process of the game is working as expected.

2. does gravBALL change to "Oops!" (drawLose) screen if collision is detected:
    1. Click the canvas to start game.
    2. Let the ball freely bounce until collides the a pillar.
    3. the canvas changes to "Oops" as expected.
    4. This verifies that the collision mechanic of the game is working as expected.

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

5. I expect the DOM to display a message saying the screen is too small, and the game canvas not to be displayed, if page is loaded under the small Bootstrap breakpoint:
    1. Load the page.
    2. Click on developer tools, and select "Toggle device toolbar" from the options.
    3. Check the expected message is displayed
    4. Check the game canvas is not being displayed.
    5. This is verifies it is functioning as expected.

5. I expect the high score to be kept if the page is reloaded, also for the highscore to update if greater than the last.
    1. Load the page.
    2. Played the game, got a score of 1.
    3. Reloaded the page.
    4. The start screen displays "High Score: 1", also opened developer tools and checked under local storage to see if it was set.
    5. Local storage "highScore" set to "1".
    6. repeated step 2, but got a score of 7.
    7. reloaded page
    8. The start screen displays "High Score: 7", also opened developer tools and checked under local storage and "highScore" was set to "7".

6. I expect the canvas to not register key input if I've clicked outside of the canvas element
    1. Load the page.
    2. click inside the canvas to start the game.
    3. click outside of the canvas once the game has started.
    4. hold down *spacebar*, the ball freely bounces which means key input isn't being registered
    5. This verifies it is functioning as as expected.

</p>
</details>

---

# Deployment

The deployment of this site was acheived with "Github Pages", the process I took to acheive this as follows.

* I logged into Github, and created a repository, named gravBALL-game-component.
- I pushed the initial commit, and kept commiting and pushing when any minor, or major change had been made that I was happy with.
- Once I had the initial commit in place, I clicked settings in the repository page on Github.
- I scrolled down to GitHub Pages section within the settings page
- Underneath *source*, is a dropdown menu, this is where I selected "master branch".
- Once "master branch" had been selected, a link to the deployed is provided within the GitHub Pages container.

---

* If you want to run *gravBALL* locally, you can clone this repository into an editor of your choice

- Paste this into the editors terminal - <code>git clone https://github.com/tenbonks/gravBALL.git</code>

- To cut ties with this GitHub repository, type this into the terminal - <code>git remote rm origin.</code>

---

# Credits

**Content**

All the content in the site, was written by me.

---

**Media**

gravBALL - Ben Tonks, Github @tenbonks, owner of this repository.

*PaulMorek* via *freesound* | beep when score increments | source - https://freesound.org/people/PaulMorek/sounds/330052/

*suntemple* via *freesound* | game lose noise | https://freesound.org/people/suntemple/sounds/253174/

*leviclaassen* via *freesound* | noise on game start | https://freesound.org/people/leviclaassen/sounds/107786/

*michorvath* via *freesound* | plays on ball bounce | https://freesound.org/people/michorvath/sounds/269718/

Textured Backgrounds - https://www.transparenttextures.com/

Typography - https://fonts.google.com/
---

**Acknowledgements**

Chris Deleon for basics in canvas game making, via tennis udemy course - this is where I got most of the logic on how to create a game. - https://www.udemy.com/course/how-to-program-games/

Code Explained (Youtube Channel) for inspiration on implementing the pillars, via flappy bird tutorial - https://www.youtube.com/watch?v=L07i4g-zhDA

Spicy Yoghurt for inspiration on implementing a game loop, via a blog post on spicyyoghurt.com

All gradient CSS styles were made using CSS Gradient, a very useful tool for getting the exact gradient you want - https://cssgradient.io/

MDN - Used as a learning resource - https://developer.mozilla.org/en-US/docs/Web/JavaScript

Slack #interactive-frontend - Used as a learning resource

