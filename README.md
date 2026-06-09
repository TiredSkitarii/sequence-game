# sequence-game

## a simple online memory game

A single page website with a simple memory bgame where players must recall a sequence of flashing shapes. The Sequence of shapes extends if the player is correct. The game is open-ended and continues until the player get's a sequence wrong.
The Primary goal of the website is to be a simple, but hopefully enjoyable, memory challenge for the user.

As a small "for fun" game, there is not a proper "business" case for the website, however, it can be considered to have the Business Goal of:
- Provide a short but challenging memory game for users to enjoy

Similarly, the "Customer" Goal would be:
- test their memory with a short, but fun game

## UX

### Ideal User

there is only one type of expected User for this site, a visitor looking to engage in a Memory Challenge game. This makes coming up with distinct User Stories challenging, but there are two key areas that have been identified that the game should try to meet:

1. the game should be simple to play
while the purpose of the game is to challenge the player's memory, it shouldn't be too complex. the Game should be easy to play and understand so that the challlenge comes from the natural flow of gameplay, not the mechanics themselves

2. the game should be relatively quick to play.
While the game is intended to be open ended, continuing until the Player makes a mistake, the individual rounds should not take too long. Furthermore, the length of the game played by a player who acehvies an average score should also not be too long.

** This project meets these goals by:**
- The Gameplay cycle is kept simple - players simply click the shapes they were shown during the game's turn. The Challenge to the player's memory comes as the sequnce of shapes grow longer and longer, not from any complex mechanics
- the Gameplay cycle is relavitly quick: the Shapes are flashed for about a second, meaning early rounds happen very quickly. Obviously, the longer the sequence gets, the longer a round takes, but the average score of the testers when playtesting the game was in the range of 7-11, meaning games only took around 5 minutes at the most to complete.

### Wireframe Mockups

The Game has the same overall style across all screen sizes, but the layout of the shapes changes to account for the differeing widths - the reason this is necessary is to ensure all the shapes can fit on the screen at the same time. Without this, Players could miss shapes if they are selected to flash while offscreen, which could cause them to break their streak.

**Mobile View**
For Mobile Screens, which are taller than they are wide, the shapes are placed in a vertical column
![Wireframe - Mobile](https://github.com/user-attachments/assets/529d83ba-4c88-41b4-bc44-49539f97cd13)

**Tablet View**
For Tablets, the shapes are instead arranged in a 'Square' made of two rows of two
![Wireframe - Tablet](https://github.com/user-attachments/assets/e0becc80-92ca-476f-a942-eb55304c4d34)

**Desktop View**
On Laptops and Desktops, the width of the screen enables the shapes to be shown as a single row
![Wireframe - LaptopDesktop](https://github.com/user-attachments/assets/e6739fb8-432a-455d-9db0-3f1284334a06)


## Features

The Game is situated on a single page website, negating the need for a navigation pane (as there is no other page to navigate to).

The Page is split into distinct sections, all of which are self-evident and logical for a user:

The Header section of the page contains the title of the game "Sequnce Game" on a greyed background to provide contrast from the other areas of the site.

The next section is a small area containing a "How to Play" button - this Button opens a modal containing breif instructions on how to play the game, with a close button to enable closing the modal

Beneath this is the main game area, which contains all the main features of the site, and also shares a lightly greyed out background to define the play area. Four dark Grey shapes (a darker shade of grey than the background) a positions: a Square, a Circle, a Triange and a Diamond, and beneath them is a Green Button labelled "Start Game" and a white Score area which shows the player's current score.

### Gameplay

on starting the game, one of the shapes will flash a colour (the shapes all have set colours: the Triangle is Yellow, the Square Blue, the Circle Red and the Diamond is Green). During the game's turn the player is unable to interact with the shapes, until it is finished, then a Small pop-up announcment will then appear on the top of the screen informing the player that it is their turn. They Player then has to click the shape that flashed up to proceed - on doing so they will received a small congratulatory pop-up message. Closing the message continues the game, with two shapes flashing up now, and the player having to select both in the order they appears to proceed. This continues with the sequence of shapes getting longer and longer, until eventually the Player makes a mistake and the game ends. On the game endind, the Player receives another pop-up message with their score, and a button to restart the game.
It's worth noting that currently, the sequence is the same for every round in a game, it just get's longer and longer as the game progresses. (e.g. if the first shape is the circle, then the first shape of every other round in that game will be the circle).

While the game is ongoing, the Start Game button is renames the Restart Game button, and pressing it while the game is in progress resets the game to the begining.

Another feature is the score tracker at the bottom of the game area - while the game is open-ended, the tracker displays a "/10" as a target for players to aim for. If they are able to reach this score, then the tracker updates to be "/25", providing a new target for the player to aim for. This happens again at 25 score with a new target of 50, and again at 50 with a target of 100. In the unlikely, but still possible, scenario that a player reaches a score of 100, then the scroe total becomes an Infinity symbol.

### Active Features

- **How to Play:** Button opening modal with gameplay instructions
- **Shapes:** the Shapes flash when clicked to confirm user interaction
- **Start Game:** Button starts the game sequence, or restarts it if game is ongoing
- **Your Turn:** Small pop-up informing player of when it is their turn
- **Score:** Score updates with player success, and also updates target socre based on player performance.

### Additional Features to add in Future

- **Audio Feedback:** at the moment, the game is purely visual, which would prove an accessibilty concern for people with Visual impairments. Adding an Audio chime to provide additonal feedback when a Shape is flashes/selected would enable the game to reach a wider audience.
- **Difficutly:** prospectively, various difficulties could be introduces, with each harder difficulty having a shorter time when a shape is flashed (e.g on "easy" each shape is flashed for 2 seconds, on "medium" 1 second, and on "hard" for only .5 of a second)
- **Randomisation:** at Present, the sequence remains the same between rounds, only changing on a new game. A potential alternative game mode could see the sequence randomise each round, while still increasig in length each round.

## Technology Used

This Project was made using HTML, CSS and Javascript
- The IDE used was Visual Studio Code (VSCode)
- Website is hosted on GitHub (https://github.com)
- Bootstrap CDN v5.3.8 was used in the construction of this Webpage (https://getbootstrap.com/)
- The Favicon logo was generated by Favicon.io
- HTML and CSS Validated with W3C Markup Validation service (https://validator.w3.org/) and W3C CSS Validator Service (https://jigsaw.w3.org/css-validator/)
- Autoprefixer CSS Online used to validate the CSS code for all browsers (https://autoprefixer.github.io/)
- Code was Formatted using Prettier - Code Formatter extension availble on VSCode Extensions Marketplace

## Testing

The process of Testing is an important part of the development of any web application - it ensures that the application functions correctly and that any bugs that might arise during the process of development are resolves during the development process, and do not impact the function of the app.
Testing can take the form of either automated or manual tests, automated tests being code written to test lines or blocks of code in a controlled environment, while Manual tests involved checking the code works directly by seeing if the feature works as intended - I.E clicking on a button on the app results in the action that is supposed to happen, happening. Testing can also play an important role in creating the code itself - by adoping a test-centric apporach to development, code is written to pass incrementing tests that gradually build up to the full functionality of the app.
Ideally, a mix of both automated and manual testing will be employed, and testing will take place during the development process, as opposed to as a separate stage afterwards (though this may not always be possible in larger development environments with multiple developers working on it). Fortunately, the small scale of this project meant that testing could take place as the code was written, with each step being extensively manually tested before moving on to the next one. This approached, essentually a manuial test-centric approach, ensured that the core functionality of the app worked and that all further changes and additions to the code did not impact that functionality - it also had the side affect of rendering any automated testing unnessacry, as the code was essentially tested as it was written, meaning automatic tests would provide no additional value - the code already being confirmed to work.

### Functionality

The Game was tested on the following criteria to assess it's functionality:

| Test Label | Test Action | Expected Result | Test Result |
|----------|----------|----------|----------|
| How To Play Button | Open How to Play Modal on clicking | Modal Opens | PASS |
| How to Play Modal | Closes How to Play Modal on clicking button | Modal Closes | PASS |
| Start Game | Game Begins when button clicked | First Shape flashes on screen | PASS |
| Game Function | Flashes shapes are stored in an arrary for reference | Array contains data from flashes shape | PASS |
| Player turn Notification | a notification appears when player turn begins | Notification automatically appears | PASS |
| Select Shape | Selecting a Shape progresses the round | Clicking a shape generates pushes data into the Player Array | PASS |
| Correct Message | Selecting a correct shape generates a feedback message | "Well Done" Message appears | PASS |
| Incorrect Message | Selecting an incorrect shape generates a different feedback message | "Wrong Move" message appears | PASS |
| Score Updates | Score automatically updates with player Success | Score increments with completed rounds number | PASS |
| Target Score Updates | Target Score updates based in Player Score | Target Score incremennts at Score breakpoints | PASS |
| Game Progression | as Rounds progress, game sequence get's longer | multiple shapes are flashed in sequence | PASS |
| Player Progression | as Rounds progress, players must select more shapes to progress | multiple shapes are selected to progress | PASS |
| Restart Game - Game Area | Restart Game in progress via Start Game Button | Game Resets on button selection | PASS |
| Restart Game - Wrong Move | Restart game and close message via Wrong Move Message | Game Resets on button selection | PASS |
| Responsive screen | Layout of Page changes at pre-determined breakpoints | Layout Changes at certain breakpoints | PASS |

All HTML Code was validated using the online W3C HTML Validator.
<img width="1799" height="577" alt="Screenshot 2026-05-04 204802" src="https://github.com/user-attachments/assets/b734a75a-30a6-4760-af6b-e23bdddec9b2" />
The Warnings raised by the validator relate to the HTML used to generate the Shapes used in the game - therefore header sections within the section are uncessesary in this instance, as there is no text to display.
All CSS Code was validated using the online W3C CSS Validator.
<img width="1873" height="668" alt="Screenshot 2026-05-04 203534" src="https://github.com/user-attachments/assets/99d29bf1-b207-4702-adf8-c3708446cc47" />
All Javascript Code was validated using JSHint, and online Code Quality tool for Javascript.
<img width="1045" height="495" alt="Screenshot 2026-05-04 203719" src="https://github.com/user-attachments/assets/d47d22b0-1487-4fe7-b641-9816823ad729" />

Furthermore, all Javascript Code and Functions were Manually Tested as they were written, with it being confirmed that a piece of code was working properly, before moving on to work on the next piece of code. While this slowed down the wiriting of the code, it did ensure that all functions and code were working correcty through out the process, and made the identification of any errors causes by poor code interactions and typoes were found and fixed as part of the initial writing of the code. This removed the need for a lengthy post-writing testing process, but just to be safe, I ran the code through a Quality Checker Tool and ensured all the code intereactions were working across multiple browsers just to be on the safe side.
This was largely possible due to the relativelty small size of the project - for a much larger project with much more code, setting up automated testing along side the manual "test as you go" approach would be the preferred option.
In those circumstances, in addition to the manual testing which involved running and playing the game across multiple browsers (Chrome, Edge, FireFox and Safari) and on different devices (Desktop, Laptop, Tablet and Phone), we would set up some test environments using JEST, and run the individual Javascript sections to ensure that each worked, using the principle of creating tests that the code would fail, then adjusting the code until it meets the minimum requirment to pass the test. The test is then amended to add a new feature, then is would repeated until evebntually, the code now performs all the functions it was intended.
Somewhat Ironically, this process was essentially followed with manual testing during the writing of the code, with the code being written step by step, and it being manually tested to see if it worked at each step.

A Lighthouse test for the page was also run, with it scoring 97 on Mobile and 100 on Desktop - due to the lack of images and complex visuals, a high score was expected on this metric.

### User Experience

The Game was tested on the following criteria for User Experience:

| Test Label | Test Criteria | Test Result |
|----------|----------|----------|
| Text Readability | Is the Text clear and Readable | All Text fonts used are sized enough to be readable on all screen sizes |
| Colour Contrast | Are all colours used well contrasted? | All Colours used contrast with each other to remain legible |
| Consistency | Does the website amintain a consistent style and behaviour? | The Website follows the same visual style throughout all the pages and all interactive features (buttons, etc.) work as presented as would be logically expected of them |
| Intuitive Gameplay | Does the Game function logically? | The Gameplay follows a logical course that is easy to understand for the user |
| Player Feedback | Does the game feed information back to the Player? | The Player is kept updated through visiual cues as to when it is their turn, which shape they have selected, and the outcome of their choices |

### Browser Compatibility

The Game was tested on the following Browsers:
- Google Chrome (Android Phone and PC)
- Mirosoft Edge
- Firefox
- Safari

### Responsiveness

The webpage was tested for responsiveness on the following screen sizes:
- Mobile (360 x 740 approx)
- Tablet (1024 x 1366 approx)
- Laptop/Desktop screen (1920 x 1080 approx)

On all sizes tests, the layout changed to match that determined by the code breakpoints - reorganising the four shapes into a single vertical line for Mobile devices, two stacked lines of two for Tablets, and a single row for laptops and larger. These layouts were chosen to ensure that all of the shapes would be on-screen at the same time, which is integral to getting the game to work properly.

### User Stories

As mentioned earlier, there aren't really any User stories that can be applied as there is only one real type of user - however, two relevant points to User experience were raised and are addressed as follows:

1. The Game Should be Simple to Play
The process of playing the game is kept simple by limiting the gameplay loop to displaying a sequence of shapes, then having the player repeat that sequence back. This keeps Gameplay simple for the player, while acheiving the goal of challenging the Player's memory through extending the sequence.

<img width="1392" height="726" alt="image" src="https://github.com/user-attachments/assets/2c3614d1-f6e1-474b-bf07-3a6ccd215e35" />

3. The Game should not take too long to Play
While as an open-ended game, it is theoretically possible to play for hours on end, during testing of the games function it was observed that the average number of rounds the test players were able to make it to was about 10, which only took a few minutes to reach. Based on this (admittedly Narrow) sample selection, It should only take the average player about five minutes at most to complete the game, which is within the required parameters for keeping the game quick to play.

## Deployment

This project was developed using the VSCode IDE, committed to git and pushed to GitHub Pages.

To deploy this page to GitHub Pages from its GitHub repository (https://github.com/TiredSkitarii/sequence-game), the following steps were taken:

- Logging into GitHub.
- From the list of repositories on the screen, selected TiredSkitarii/sequence-game.
- From the menu items near the top of the page, selected Settings.
- Scrolled down to the GitHub Pages section.
- Under Source clicked the drop-down menu labelled None and selected Main Branch
- On selecting Main Branch the page was automatically refreshed, the website was then deployed.
- Scrolled back down to the GitHub Pages section to retrieve the link to the deployed website: https://tiredskitarii.github.io/sequence-game/
- At the moment of submitting this Milestone project the Development Branch and Main Branch are the same.

### How to Run Project

To clone this project, you will need the following:

- a Github account (create at: https://github.com)
- access to an IDE (such as VSCode)

1. Go to this projects Github repository: https://github.com/TiredSkitarii/sequence-game
2. select the downwards arrow on the green "<> Code" button
3. Select the Local tab in the dropdown
4. copy the HTTPS URL displayed
5. Go to your chosen IDE and open a New Terminal
6. Change your Working Directory to where you would want the cloned repository to be saved
7. type "git clone" then add the copied URL
8. Press enter to clone the Repository

## Credits

### Content

- All Text for all pages was written by Jakob McLaughlin (TiredSkitarii)
- Proof reading perfomed by Jakob McLaughlin
- Fonts were acquired from Google Fonts (https://fonts.google.com/)

### Code

All Code was written by Jakob McLaughlin, with the following exceptions:
- CSS for how to create shapes from W3schools.com: How To - CSS Shapes
- HTML Code for Modal from Bootstrap
- Javascript Code for alternate alerts from SweetAlert2
- Javascript Code on how to implement Unicode symbols from Javascript.Info

Previous Code Institute Modules used as reference:
- Love Maths
- Simon Game

### Acknowledgement

- Special Thanks to my Mentor, Brian Macharia for his support and suggestions
- Special Thanks to Vincent and Jozef McLaughlin for assistance with Testing
