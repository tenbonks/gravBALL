# gravBALL

Howdy, here is a **gravBALL** a game which involves as good amount of reaction speed, mixed with timing.
The goal is to get past the obstacles by manipulating gravity, simply HOLD DOWN LEFT or RIGHT MOUSE BUTTON, or TOUCH AND can be used if on mobile device. I designed this game desktop first, which isn't ideal, if you look at what I plan to implement in the future, located further down in the README, you'll see what I plan to do with this game and the changes I want to make.

**How far will you be able to get?**

# Demo

**A live demo of the site can be found** <a href="https://tenbonks.github.io/gravBALL/" rel="nofollow" target="_blank">Here!</a>

![Desktop Demo](https://github.com/tenbonks/gravBALL/blob/master/assets/images/gravBALL-Capture.PNG "Desktop Demo")

---

# UX

It is aimed for the casual gamer, who like *physic based reaction games*, such as the classic Helicopter game, well... This is like that, but with a twist. 

The website consists of simply the title, the game (with a mute button above), a information box displaying controls, and a footer. the website is essentially a landing page so no navigation is required, meaning there is no serious navigation through the site, other than getting straight to the game, the only navigation the user will need to take is scroll up or down.

If the user is on a screen size too small, the canvas and controls will be hidden, and a message will display the appropriate info to them, and to prompt the user to view in landscape.

I gave the user the option to contact me with the suggestion wanting to report a bug, or contact me for potential collaboration, this is in the footer, and if they wish to proceed, they are prompted to click "Contact Me" button, on doing this a modal will appear at the forefront of the DOM. with the fields required layed out in a clean and appealing fashion.

As a Gamer, I want to play this game, so I can get a high score.

As a Developer, I want reach out to a fellow developer, so we can collaborate.

**Wireframe/Mockup can be found in the files of this repository, under the folder "Wireframe/Mockup".**

---

# Features

* An intuitive, yet simple control mechanism - Simply Hold Down either MOUSE BUTTON, or SPACEBAR to control the ball's gravity, this means you can control how it falls or rises. (Touch control also works)

- A score tracker - So you can feel the intensity when you're about to beat the high-score

- A locally set High score, in the user's browser - So the high score won't be reset if the user closes the game

- A mute button - To enable the user to play the game without game sounds. information is displayed to the user if sound is on or off.

- A option to "Contact Me" - For if the user wants to collaborate, or maybe report a bug if found, a confirmation email will be sent to the supplied email address.

Note that the "mute" button was implemented as an outcome from a trial of the site, I sent it out via slack, and as a response to the following feedback - 

"Hello, The website looks great, the game is hard:)!
Just one thing, as a user I could use a sound off/on button." - **Zoli** (A user on Slack)

---
**Features to implement in the future**

I would like to implement a global high score, but for that I would need to know more about back-end technologies, which is covered later in the course I am currently in.

I would like to implement a scalable canvas screen but after trying its proved difficult to implement, mainly the vertical attribute of the canvas.

I would like to implement a full screen option, so the canvas will take up the entire display, this is mainly for small mobile devices as currently the dimensions of the game won't work too well mobile, I'd like to be able to have it work like an app on mobile, as typically you wouldn't visit a website to play a game on mobile devices. 

I would like to implement a auto scale feature so the canvas would responsively fit in the screen size, but I was having problems with this, I think it was my use of bootstrap which was making it a bit more complicated, so as a last minute workaround I added media breakpoints into the CSS, so the canvas has preset sizes which keeps the aspect ratio intact. Looking back I wouldn't of developed this game in (4:3) as its not really friendly for mobile phones, due to their narrow and long screen.

I would like to come back to this game, and following the way I've developed gravBALL in vanilla JS, develop it in a framework such as Phaser3, I stumbled across phaser recently and thought it looked Ideal for the game I was making, but wouldn't of been feasible to get rid of the work I had done and to learn how to use the framework. The benefit of it being perfect for mobile development, with the ease of developing the game to work as a "Facebook Messenger" game. Personally I see this as the better way to release a game of this sort, as it would be easier to access the game, and the highscore would be able to be set between friends and such.

---

# Technologies used

HTML, CSS, Javascript, Bootstrap 4 framework, jQuery Framework, emailJS , Adobe XD (for design planning).

This game was created using HTML5 (HyperTextMarkupLanguage), CSS (Cascading Style Sheets) and JS (JavaScript), all of these play attributes in the actual game. For the actual website I used HTML, CSS, the Bootstrap 4 framework for positioning of elements, along with css to style the page, I used transparent textures in the css to give the site some character.

* HTML - Used in the structuring of the index.html file, also plays a role in coordinates of drawn shapes in the canvas

- CSS - Is used for the styling of the site, it also draws the background to the canvas game.

- Javascript -  All of the game mechanics are written in Javascript, in fact everything is Javascript within the canvas other than the background, which is css

- Bootstrap 4 - Used to position elements in the DOM, how I implemented the "Contact Modal", also how I display "Device is too small" message if the screen is under the "sm" breakpoint.

- Jquery - I used jQuery to access some of the DOM elements, for example when "Mute" is clicked the "toggleMute" function will be ran. 

- emailJS - I used this to send the supplied fields in the contact form to my email address, an auto reply will be sent to confirm the email was received 

- Adobe XD - I used Adobe XD for the Mockup and Wireframe stage of development, I also returned to it to create a *favicon*, as it is easy to work on shapes, and you can specify size in pixels, so I could create a nice purpose built favicon, at 32 x 32 px. 



--- 
# Testing

I planned on using the Jasmine Framework for testing the game, but it is mainly DOM manipulation and requires certain conditions to be met while the game is running, so manual testing seemed to be the best option for me to test *"gravBALL"*

I also sent a link out of the deployed site once it was very close to finish, This was sent via slack, during this I had feedback concerning the canvas not fitting properly on mobile devices, and an issue with the modal form, caused by spacebar being a input to the game, resulting in spacebar not adding spaces.
Both of these issues have been fixed, I removed spacebar as a control as it wasn't really needed, and added breakpoints in the css to reduce the canvas size while keeping the aspect ratio.

This site was tested on multiple popular browsers, such as Chrome, Safari, Internet Explorer, FireFox, I also used the "Device Toolbar" in dev tools to emulate a variety of mobile devices, Iphone 4/5/6 and Samsung Galaxy. The only compatibility issue that appeared was the footer and banner background not loading. This was due to me using "RGB" and setting opacity to it, this was rectified by using "RGBA". No other issues across browsers.

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
    1. Upon loading the text underneath the mute button should read "Sound on", this means sound is on by default as expected.
    2. click the canvas to start game. Starting sound was played when canvas was clicked.
    3. Let the ball freely bounce, Sound was played on ball bounce.
    4. Let the ball freely bounce and hit pillar, played sound when a collision is detected.
    5. Pass an obstacle and a sound is played to indicate the score incrementing.
    6. Let the ball collide with a pillar to get to the "Oops!" screen, when clicking to restart, a sound is played to indicate the start of the game.
    7. This verifies that by default sound is on, and sound will play as expected when conditions are met.

5. Contact form/modal:
    1. Click the "Contact Me" button in the footer of the page.
    2. Try to submit the empty form and verify that an error message "Please fill in this field." appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.
    5. If cancel/X in the top right corner, is clicked the *Modal* will close.

6. I expect the DOM to display a message saying the screen is too small, and the game canvas not to be displayed, if page is loaded under the small Bootstrap breakpoint:
    1. Load the page.
    2. Click on developer tools, and select "Toggle device toolbar" from the options.
    3. Check the expected message is displayed
    4. Check the game canvas is not being displayed.
    5. This is verifies it is functioning as expected.

7. I expect the high score to be kept if the page is reloaded, also for the high score to update if greater than the last.
    1. Load the page.
    2. Played the game, got a score of 1.
    3. Reloaded the page.
    4. The start screen displays "High Score: 1", also opened developer tools and checked under local storage to see if it was set.
    5. Local storage "high score" set to "1".
    6. repeated step 2, but got a score of 7.
    7. reloaded page
    8. The start screen displays "High Score: 7", also opened developer tools and checked under local storage and "high score" was set to "7".

8. I expect the canvas to not register key input if I've clicked outside of the canvas element
    1. Load the page.
    2. click inside the canvas to start the game.
    3. click outside of the canvas once the game has started.
    4. hold down *spacebar*, the ball freely bounces which means key input isn't being registered
    5. This verifies it is functioning as as expected.

9. I expect to receive an email if I correctly fill out all fields of the contact modal
    1. Fill out the contact form, correctly, as tested in "Test 5", with a different email address to the one emailJS is set up to send to.
    2. Click "Send!" button.
    3. Sign into my gmail account, look at most recent email/s.
    4. The test email was received.
    5. I logged into the email address I provided in the contact modal.
    6. The auto reply has been received, confirming the email has been sent.
    7. This verifies that the contact modal, is working with emailJS as expected.

</p>
</details>

---

# Deployment

**The deployment of this site was achieved with "Github Pages", the process I took as follows...**

* I logged into Github, and created a repository, named gravBALL-game-component.
- I pushed the initial commit, and kept committing and pushing when any minor, or major change had been made that I was happy with.
- Once I had the initial commit in place, I clicked settings in the repository page on Github.
- I scrolled down to GitHub Pages section within the settings page
- Underneath *source*, is a drop-down menu, this is where I selected "master branch".
- Once "master branch" had been selected, a link to the deployed is provided within the GitHub Pages container.

---

**If you want to run *gravBALL* locally, you can clone this repository into an editor of your choice**

* Paste this into the editors terminal - <code>git clone https://github.com/tenbonks/gravBALL.git</code>

- To cut ties with this GitHub repository, type this into the terminal - <code>git remote rm origin</code>

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

Maranatha Ilesanmi - Valuable guidance as my mentor through this project.



