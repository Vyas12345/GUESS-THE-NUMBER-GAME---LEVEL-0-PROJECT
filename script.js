'use strict';
let Secret_Number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (score > 1) {
    if (!guess) {
      // here when there is no guess or when guess is correct or when guess is too low or high
      // here the code is been implemented to show the message
      document.querySelector('.message').textContent = 'NO NUMBER⚠️';
      //displayMessage('NO NUMBER⚠️');
    }
    //the player wins the game
    else if (guess === Secret_Number) {
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      document.querySelector('.number').textContent = Secret_Number;
      //displaying the secret number in the place of '?' only at the time of correct guess of lose-completely
      document.querySelector('.message').textContent = 'correct guess 👌';
      //displayMessage('correct guess 👌');
      document.querySelector('body').style.backgroundColor = 'green';
      document.querySelector('.number').style.width = '30rem';
      // document.querySelector('.number').style.height = '50rem';
    }
    //If the guess is Too high
    else if (guess > Secret_Number) {
      document.querySelector('.message').textContent = 'Guess is Too High';
      // displayMessage('Guess is Too High');
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
    //if the guess is too low
    else if (guess < Secret_Number) {
      document.querySelector('.message').textContent = 'Guess is Too Low';
      // displayMessage('Guess is Too Low');
      score -= 1;
      document.querySelector('.score').textContent = score;
    }
  }
  //if the score is 1 or less than 1
  else {
    document.querySelector('.number').textContent = Secret_Number;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.message').textContent = 'YOU LOST THE GAME 👋🙋‍♂️';
    // displayMessage('YOU LOST THE GAME 👋🙋‍♂️');
    document.querySelector('.score').textContent = 0;
  }
  // REFRACTORED CODE:
  // IF THE GUESS IS WRONG
  // else if(guess !==Secret_Number){
  //   if(score>1){
  // // HERE AGAIN  NEED TO COMPARE IF THE GUESS IS GREATER OR LESSER THAN SECRET NUMBER
  // // INSTEAD OF IF-ELSE STATEMENT WE CAN USE THE TERNARY OPERATOR
  // // AND THE RESULT OF THIS TERNARY OPERATOR WOULDD DISPLAY A MESSAGE
  // // THIS MESSAGE TO BE DISPLAYED USING DOM
  //   document.querySelector('.message').textContent=guess>Secret_Number?"Too High":"Too Low";
  //   }
  //   else{
  //     document.querySelector('.message').textContent="YOU LOST THE GAME";
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20; //score is reasigned to initial value of 20,here only the variable is been reasigned
  document.querySelector('.score').textContent = score; // the value within score(box) is been reasigned to 20;
  Secret_Number = Math.trunc(Math.random() * 20) + 1; //reasigning the value of secret_Number
  document.querySelector('.message').textContent = 'Start guessing once again '; //reassing the message box
  // displayMessage('Start guessing once again ');
  document.querySelector('.number').textContent = '?'; //question mark back
  document.querySelector('.guess').value = ''; //the input box for guess is been refreshed with no values
  document.querySelector('body').style.backgroundColor = '#222'; // reassing the background color to the original one
  document.querySelector('.number').style.width = '15rem'; // reassing the size of secret number displayed back to original
});
