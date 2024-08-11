
function guessNumber() {
  let generateNumber = Math.round(Math.random() * 100) + 1;
//   console.log(generateNumber);

  let guessNumber = document.getElementById("guessNumber");
  let btn = document.getElementById("checkNumberBtn");
  let hints = document.getElementById("hints");
  let results = document.getElementById("results");
  let attemptCount = document.getElementById("attemptCount");
  attemptCount.classList.add("color1");

  let attempts = 0;

  let hint0 = document.createElement("div");
  hint0.classList.add("hint0", "color4");
  hint0.id = "hint0";
  hint0.textContent = "Invalid Guess! Try One More Time!!!";
  let hint1 = document.createElement("div");
  hint1.id = "hint1";
  let hint2 = document.createElement("div");
  hint2.id = "hint2";
  let hint3 = document.createElement("div");
  hint3.id = "hint3";

  attemptCount.textContent = attempts;

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (Number(guessNumber.value) <= 100 || Number(guessNumber.value) !== "") {
        // console.log(guessNumber.value);
        
      attempts++;
      if (generateNumber == Number(guessNumber.value)) {
        //Success
        let success = document.createElement("div");
        success.classList.add("successMessage");
        success.id = "successMessage";

        const text1 = document.createTextNode("You have Guessed the Number ");
        const boldE = document.createElement("span");
        boldE.id = "resultCount";
        const boldT = document.createTextNode(generateNumber);
        boldE.appendChild(boldT);
        const text2 = document.createTextNode(" in ");
        const boldEl = document.createElement("b");
        boldEl.id = "resultCount";
        const boldA = document.createTextNode(attempts);
        boldEl.appendChild(boldA);
        const text3 = document.createTextNode(" attempt(s) ");

        success.append(text1, boldE, text2, boldEl, text3);

        results.appendChild(success);

        btn.textContent = "Play Again";
        btn.classList.add("success");
        attemptCount.textContent = attempts;

        setTimeout(() => {
          let successMessage = document.getElementById("successMessage");
          if (successMessage) {
            results.removeChild(successMessage);
          }
        }, 2000);

        guessNumber.value = "";

        newGame();
      } else {
        //Failure
        let successMessage = document.getElementById("successMessage");
        if (successMessage) {
          results.removeChild(successMessage);
        }
        attemptCount.textContent = attempts;
      }

      if (attempts === 1 && attempts < 3) {
        // Hints Basic Invalid Number
        hints.appendChild(hint0);

      } else if (attempts === 3) {
        // First Hint Even or Odd
        let hints0 = document.getElementById("hint0");
        hints.removeChild(hints0);
        hint1.classList.add("hint1", "color2");
        attemptCount.classList.remove("color1");
        attemptCount.classList.add("color2");

        if (generateNumber % 2 === 0) {
          hint1.textContent =
            "Hint #1: The number you are guessing is Even Number";
        } else {
          hint1.textContent =
            "Hint #1: The number you are guessing is Odd Number";
        }
        hints.appendChild(hint1);
      } else if (attempts === 5) {
        // Second hint range

        hint2.classList.add("hint2", "color3");
        attemptCount.classList.remove("color2");
        attemptCount.classList.add("color3");
        if(generateNumber <= 10){
          hint2.textContent = "Hint #2: The number is in the range of 1-10";
        } else if (generateNumber > 10 && generateNumber <= 20) {
          hint2.textContent = "Hint #2: The number is in the range of 11-20";
        } else if (generateNumber > 20 && generateNumber <= 30) {
          hint2.textContent = "Hint #2: The number is in the range of 21-30";
        } else if (generateNumber > 30 && generateNumber <= 40) {
          hint2.textContent = "Hint #2: The number is in the range of 31-40";
        } else if (generateNumber > 40 && generateNumber <= 50) {
          hint2.textContent = "Hint #2: The number is in the range of 41-50";
        } else if (generateNumber > 50 && generateNumber <= 60) {
          hint2.textContent = "Hint #2: The number is in the range of 51-60";
        } else if (generateNumber > 60 && generateNumber <= 70) {
          hint2.textContent = "Hint #2: The number is in the range of 61-70";
        } else if (generateNumber > 70 && generateNumber <= 80) {
          hint2.textContent = "Hint #2: The number is in the range of 71-80";
        } else if (generateNumber > 80 && generateNumber <= 90) {
          hint2.textContent = "Hint #2: The number is in the range of 81-90";
        } else if (generateNumber > 90 && generateNumber <= 100) {
          hint2.textContent = "Hint #2: The number is in the range of 91-100";
        }

        hints.appendChild(hint2);
      } else if (attempts === 10) {
        // reveal the number
        attemptCount.classList.remove("color3");
        attemptCount.classList.add("color4");
        hint3.classList.add("hint3", "color4");
        hint3.textContent =
          "Sorry!!!! Game Over !!! You could not guess the number: " + generateNumber;
        hints.appendChild(hint3);
        btn.textContent = "Play Again";
        btn.classList.add("failure");
      } else if (attempts >= 11) {
        // create new game
        newGame();
      }
    } else {
    }
  });
  function newGame() {
    // Reset game state
    generateNumber = Math.round(Math.random() * 100) + 1;
    // console.log(generateNumber);
    attempts = 0;
    attemptCount.textContent = attempts;
    hints.innerHTML = '';
    btn.classList.remove("failure", "success");
    btn.textContent = "Check";
    attemptCount.classList.remove("color2", "color3", "color4");
    attemptCount.classList.add("color1");
    guessNumber.value = "";
  }
}
guessNumber();