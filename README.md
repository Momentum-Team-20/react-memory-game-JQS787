[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/OJ2YHv2T)
# React Memory Game

For this assignment, you are going to make the classic child's game of memory or [concentration](https://en.wikipedia.org/wiki/Concentration_(card_game)).

You will have a series of cards with a front and back. The back of each is the same. The front has some image. Each image is used twice. For example, you might have 12 squares, with the following animals repeated twice: antelope, possum, cow, egret, penguin, and falcon. Shuffle these up and present them to the user face down. When the user clicks one, show it face up. When the user clicks a second, show it face-up as well. If the two match, the two squares are marked correct and are disabled from further clicks. If the two do not match, the user is shown that they are incorrect and they are both turned face-down again.

The game should not start until the first selection is clicked. When it starts, you should show a timer to the user. When the user has gotten all selections right, stop the timer and show the user they've won.

It is up to you how many squares to show and what they have on their fronts. There should be at least 12.

## 🌶️ Spicy options

- Keep track of previous speed records (you can use [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) for this).
- Show not only a timer, but also the number of incorrect guesses.
- Add a way to:
  - restart the game at any time.
  - show the user the solution (all cards face-up).
  - shuffle the cards at any time.
  - change the theme of the game (e.g.: light mode vs. dark mode).
  - have different themes by changing colors and images on the cards (e.g.: animals, cars, musical instruments).
  - choose a difficulty level by changing the number of cards (e.g.: 12 vs. 24 vs. 36).
- Add animations and sound effects using a library like [Framer Motion](https://www.framer.com/motion/) or [Howler.js](https://howlerjs.com/).
- Implement a hint system that allows a user to get a hint if they are stuck. For example, the hint can show the user one of the cards that matches the one they have selected, or could be more indirect, like highlighing the row or column that the matching card is in.
- Add an option to play against the computer. The computer should be able to play the game without any user input.
- Add a way to play against another human. Each player takes turns clicking two cards. If they match, the player gets a point and goes again. If they do not match, the player's turn is over and the next player goes. The game ends when all cards are matched. The player with the most points wins.


## How to complete this project

- First, plan out how you think it should work. What events will you need to listen for? What data will you need to start? What data will you need to store?
- Start small. Strip the problem down to the smallest version you can imagine. For example, you could make it with all squares face-up and no timer. Once you get this working, then add in the next steps until you have a completed application.

## Resources

- [Pexels - free stock photos](https://www.pexels.com/) -- maybe a good place to get images
- [How to create an accurate timer in JavaScript](https://stackoverflow.com/questions/29971898/how-to-create-an-accurate-timer-in-javascript) from Stack Overflow
