<<<<<<< HEAD
#  A Blog API
## About the app
A Blog API, with full CRUD using NodeJS, Express, Mongoose, and MongoDB.
![alt text](https://jmui-blog.herokuapp.com/  "Blog Api link")
 

## Explanations of specific technologies 
### HTML 
HTML is a language used to describe the content and structure of documents. HTML elements show things like text, images, and lists
Elements have attributes that allow us to add additional information.  Elements can contain other elements.  Div tags were used in this project to wrap other elements.

### CSS
Rules that specify how your elements should appear or look on your page.
For this project, CSS was used to postion the elements, provide a background, and set the font color and styles of HTML objects.
 
### JavaScript 
JavaScript is a programming language used both on the client-side and server-side that allows you to make web pages interactive.
Javascript was used to create the game functions and display data dynamically in the HTML document.

### Document Object Model (DOM)
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
For this project, javscript functions accessed the DOM to dynamically create the card images on the screen.
Functions were also used to display data suchs as the player's score, number of wins, the value of the dealer's cards, and the amount of money left in the player's bank.

## Approach Taken
The rules and actions of the players in blackjack were studied and functions were created that implemented those rules and actions.
The main functions are:
*   initializeDeck  - initializes array of card objects to hold image links, card values, and suits
*   shuffleDeck     - loop though the deck and swap each card with another random card
*   hitMe           - player receives a card from the dealer
*   stay            - player doesn't want another card and ends the turn
*   getScore        - retreives the score for each player
*   displayScore    - displays the current score for each player
*   deal            - start game round by dealing two cards to player then dealer with the second card for the dealer placed faced down
*   getCard         - retrieves a card from the deck
*   resetGame       - clear the card objects from the screen and reinitialize the deck of cards
*   wager           - calculates the amount of money won or lost and adds it to the bank
*   checkStatus     - check to see if there is a winner and if the player has enought money to continue
*   setBetchips     - reads in the value of chips that the user clicked and puts in in the betting input box

## Unsolved Problems
Find a better way to hide buttons.
Something could be done to animate the cards so that they don't just bounce into view.
There are some player decisions that are available in the casino version of blackjack that were not implemented in this simplified version.
They include:
*  Double down: Increase the initial bet by 100% and take exactly one more card. 

* Split: Create two hands from a starting hand where both cards are the same value. Each new hand gets another card so that the player has two starting hands. This requires an additional bet on the second hand. The two hands are played out independently, and the wager on each hand is won or lost independently. 

* Surrender: Forfeit half the bet and end the hand immediately. 

Extra functionalties can be created to implement these player actons in future versions of the Per Scholas Software Engineering Course blackjack game 

## Link to Hosted Site
 This game is hosted on GitHub Pages at [Black Jack](https://jsnmui.github.io/blackjackthegame/ "Black Jack Game")

## Installation Instructions
Click on the link that was mentioned in 'Link to Hosted Site' and enjoy.

## Instructions on HOW TO PLAY :)

 Beat the dealer by getting a hand as close to 21 as possible, without going over 21. A blackjack occurs when you get one ace and one 10 point card on the first hand.

### Gameplay
* Place a bet
* Press 'Deal" to begin a new round.
* The dealer and player are initially dealt 2 cards each.
* The dealer's second card will be placed face down.
* You can choose to either hit (receive more cards) or stand (end your turn).
* The dealer must draw on 16 or under and must stand on 17 or over.
* You can hit as many times as you choose so long as your deck is under 21.
* You can place bets by clicking on the betting chips or entering a value in the input box.
* Game is over when you run out of money.
* Press RESTART to reset the game.
### Card Values

* Jacks, Kings, and Queens are worth 10 points.
* Number cards are worth their face value.
* Aces can be worth either 11 or 1.
* Aces have a default value of 11 unless that would result in a total score over 21. In that case, it is worth 1 point.

=======
# My blogapi
https://jmui-blog.herokuapp.com/
>>>>>>> 2449b35eceb73c352c1ced4dc7b5eeb7495ef55f
