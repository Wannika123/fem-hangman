# Frontend Mentor - Hangman game solution

This is a solution to the [Hangman game challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/hangman-game-rsQiSVLGWn). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Learn how to play Hangman from the main menu.
- Start a game and choose a category.
- Play Hangman with a random word selected from that category.
- See their current health decrease based on incorrect letter guesses.
- Win the game if they complete the whole word.
- Lose the game if they make eight wrong guesses.
- Pause the game and choose to continue, pick a new category, or quit.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.
- Navigate the entire game only using their keyboard.

### Screenshot

![Screen Shot 2567-12-16 at 17 52 14](https://github.com/user-attachments/assets/b72b5438-3d31-41d4-81c0-a875f0ba47dc)

![Screen Shot 2567-12-16 at 17 55 47](https://github.com/user-attachments/assets/5a9418a5-d4ca-4fc0-b100-745ee98624d2)

![Screen Shot 2567-12-16 at 17 53 54](https://github.com/user-attachments/assets/532dba4f-eb29-4465-926d-9fa43442fdf3)

### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- TypeScript
- Web Audio API

### What I learned

- I learned that there can be more than one box-shadow value (seperated by comma). 
- I tried initialize AudioContext() with custom hook, and that doesn't work. Using context is a better way, because the AudioContext() will be initialize only once (if I understand correctly). 

## Author

- Frontend Mentor - [@Wannika123](https://www.frontendmentor.io/profile/Wannika123)