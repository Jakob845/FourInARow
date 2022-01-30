DrawBoard();
//Draw board
function DrawBoard() {
  document.querySelectorAll(".sqrClass").forEach((e) => e.remove());

  for (let x = 0; x < 6; x++) {
    for (let i = 0; i < 6; i++) {
      let s = document.createElement("div");

      if (x % 2 == 0) {
        if (i % 2 == 0) {
          s.style.backgroundColor = "white";
        } else {
          s.style.backgroundColor = "black";
        }
      } else {
        if (i % 2 == 0) {
          s.style.backgroundColor = "black";
        } else {
          s.style.backgroundColor = "white";
        }
      }

      s.style.height = "12%";
      s.style.width = "12%";
      s.style.margin = "2%";
      s.style.justifyContent = "center";
      s.style.alignItems = "center";
      s.style.display = "flex";
      s.className = "sqrClass";
      s.addEventListener("click", function () {
        addCirkle(this);
      });
      document.getElementById("flexContainer").appendChild(s);
    }
  }
}

let squareArray = document.getElementsByClassName("sqrClass");

let playerTurn = true;

let playerPoints = 0;
let nPCPoints = 0;

let placeCirkleSound = new Audio("./Sound/Succes.wav");
let placeCirkleFailedSound = new Audio("./Sound/Fail.wav");
let winSound = new Audio("./Sound/Win.wav");

playerTurnHeading();

function addCirkle(square) {
  if (playerTurn) {
    if (square.id != "taken") {
      square.id = "taken";
      playerTurn = !playerTurn;
      let c = document.createElement("div");
      c.style.height = "75%";
      c.style.width = "75%";
      c.style.borderRadius = "50%";
      c.id = "cirkle";
      c.className = "cirkleClass";

      if (playerTurn) {
        c.style.backgroundColor = "red";
      } else {
        c.style.backgroundColor = "blue";
      }

      square.appendChild(c);
      fourInARowCheck();
      playerTurnHeading();
    } else {
      $(square).animate({ opacity: "0.4" }, "fast");
      $(square).animate({ opacity: "1" }, "slow");
      placeCirkleFailedSound.play();
    }
    Npc();
  }
}

function fourInARowCheck() {
  let squareArrayValues = [];

  for (let i = 0; i < squareArray.length; i++) {
    if (squareArray[i].childElementCount === 0) {
      squareArrayValues[i] = 0;
    } else if (squareArray[i].firstChild.style.backgroundColor === "blue") {
      squareArrayValues[i] = 1;
    } else {
      squareArrayValues[i] = 2;
    }
  }

  //Horizontal check
  let x = 0;
  for (let vr = 0; vr < 6; vr++) {
    for (let hr = x; hr < x + 3; hr++) {
      if (
        squareArrayValues[hr] === squareArrayValues[hr + 1] &&
        squareArrayValues[hr] === squareArrayValues[hr + 2] &&
        squareArrayValues[hr] === squareArrayValues[hr + 3] &&
        squareArrayValues[hr] != 0
      ) {
        //Makes the winning squares green
        squareArray[hr].style.backgroundColor = "green";
        squareArray[hr + 1].style.backgroundColor = "green";
        squareArray[hr + 2].style.backgroundColor = "green";
        squareArray[hr + 3].style.backgroundColor = "green";
        setTimeout(() => {
            if (squareArrayValues[hr] === 1) {
            //   Win("Blue");
            alert("Sorry four blue in a row");
            } else {
            //   Win("Red");
            alert("Sorry four red in a row");
            }
            newGame();
        }, 100);
        return;
      }
    }

    x += 6;
  }

  //Vertical check
  for (let hr = 0; hr < 6; hr++) {
    for (let vr = hr; vr < 36; vr += 6) {
      if (
        squareArrayValues[vr] === squareArrayValues[vr + 6] &&
        squareArrayValues[vr] === squareArrayValues[vr + 12] &&
        squareArrayValues[vr] === squareArrayValues[vr + 18] &&
        squareArrayValues[vr] != 0
      ) {
        squareArray[vr].style.backgroundColor = "green";
        squareArray[vr + 6].style.backgroundColor = "green";
        squareArray[vr + 12].style.backgroundColor = "green";
        squareArray[vr + 18].style.backgroundColor = "green";
        setTimeout(() => {
            if (squareArrayValues[vr] === 1) {
            //   Win("Blue");
            alert("Sorry four blue in a row");
            } else {
            //   Win("Red");
            alert("Sorry four red in a row");
            }
            newGame();
        }, 100);
        return;
      }
    }
  }

  //Diagonal falling right check

  for (let hr = 0; hr < 3; hr++) {
    for (let vr = hr; vr < 36; vr += 7) {
      if (
        squareArrayValues[vr] === squareArrayValues[vr + 7] &&
        squareArrayValues[vr] === squareArrayValues[vr + 14] &&
        squareArrayValues[vr] === squareArrayValues[vr + 21] &&
        squareArrayValues[vr] != 0
      ) {
        squareArray[vr].style.backgroundColor = "green";
        squareArray[vr + 7].style.backgroundColor = "green";
        squareArray[vr + 14].style.backgroundColor = "green";
        squareArray[vr + 21].style.backgroundColor = "green";
        setTimeout(() => {
            if (squareArrayValues[vr] === 1) {
            //   Win("Blue");
            alert("Sorry four blue in a row");
            } else {
            //   Win("Red");
            alert("Sorry four red in a row");
            }
            newGame();
        }, 100);
        return;
      }
    }
  }

  for (let vr = 6; vr < 22; vr += 6) {
    for (let hr = vr; hr < 36; hr += 7) {
      if (
        squareArrayValues[hr] === squareArrayValues[hr + 7] &&
        squareArrayValues[hr] === squareArrayValues[hr + 14] &&
        squareArrayValues[hr] === squareArrayValues[hr + 21] &&
        squareArrayValues[hr] != 0
      ) {
        squareArray[hr].style.backgroundColor = "green";
        squareArray[hr + 7].style.backgroundColor = "green";
        squareArray[hr + 14].style.backgroundColor = "green";
        squareArray[hr + 21].style.backgroundColor = "green";
        setTimeout(() => {
            if (squareArrayValues[hr] === 1) {
            //   Win("Blue");
            alert("Sorry four blue in a row");
            } else {
            //   Win("Red");
            alert("Sorry four red in a row");
            }
            newGame();
        }, 100);
        return;
      }
    }
  }

  //Diagonal falling left check
  for (let hr = 5; hr > 2; hr -= 1) {
    for (let vr = hr; vr < 18; vr += 5) {
      if (
        squareArrayValues[vr] === squareArrayValues[vr + 5] &&
        squareArrayValues[vr] === squareArrayValues[vr + 10] &&
        squareArrayValues[vr] === squareArrayValues[vr + 15] &&
        squareArrayValues[vr] != 0
      ) {
        squareArray[vr].style.backgroundColor = "green";
        squareArray[vr + 5].style.backgroundColor = "green";
        squareArray[vr + 10].style.backgroundColor = "green";
        squareArray[vr + 15].style.backgroundColor = "green";
        setTimeout(() => {
            if (squareArrayValues[vr] === 1) {
            //   Win("Blue");
            alert("Sorry four blue in a row");
            } else {
            //   Win("Red");
            alert("Sorry four red in a row");
            }
            newGame();
        }, 100);
        return;
      }
    }
  }

  for (let vr = 11; vr < 17; vr += 5) {
    if (
      squareArrayValues[vr] === squareArrayValues[vr + 5] &&
      squareArrayValues[vr] === squareArrayValues[vr + 10] &&
      squareArrayValues[vr] === squareArrayValues[vr + 15] &&
      squareArrayValues[vr] != 0
    ) {
      squareArray[vr].style.backgroundColor = "green";
      squareArray[vr + 5].style.backgroundColor = "green";
      squareArray[vr + 10].style.backgroundColor = "green";
      squareArray[vr + 15].style.backgroundColor = "green";

      setTimeout(() => {
          if (squareArrayValues[vr] === 1) {
            // Win("Blue");
            alert("Sorry four blue in a row");
          } else {
            // Win("Red");
            alert("Sorry four red in a row");
          }
          newGame();
      }, 100);

      return;
    }
  }

  if (
    squareArrayValues[17] === squareArrayValues[17 + 5] &&
    squareArrayValues[17] === squareArrayValues[17 + 10] &&
    squareArrayValues[17] === squareArrayValues[17 + 15] &&
    squareArrayValues[17] != 0
  ) {
    squareArray[17].style.backgroundColor = "green";
    squareArray[17 + 5].style.backgroundColor = "green";
    squareArray[17 + 10].style.backgroundColor = "green";
    squareArray[17 + 15].style.backgroundColor = "green";
    setTimeout(() => {
        if (squareArrayValues[17] === 1) {
        //   Win("Blue");
        alert("Sorry four blue in a row");
        } else {
        //   Win("Red");
        alert("Sorry four red in a row");
        }
        newGame();
      }, 100);
    return;
  }

  //Tie/board full check
  let boardEmpty = false;
  for (let i = 0; i < squareArrayValues.length; i++) {
    if (squareArrayValues[i] === 0) {
      boardEmpty = false;
      break;
    } else {
      boardEmpty = true;
    }
  }
  if (boardEmpty) {
    Win();
    return;
  }
  placeCirkleSound.play();
}

function playerTurnHeading() {
  let pC = document.createElement("div");
  pC.style.height = "3vh";
  pC.style.width = "3vh";
  pC.style.borderRadius = "50%";
  pC.style.display = "inline-block";

  if (playerTurn) {
    pC.style.backgroundColor = "blue";
    document.getElementById("playerHeading").innerHTML = "Player ";
    document.getElementById("playerHeading").appendChild(pC);
  } else {
    pC.style.backgroundColor = "red";
    document.getElementById("playerHeading").innerHTML = "Wait ";
    document.getElementById("playerHeading").appendChild(pC);
  }
}

function Win() {
  winSound.play();
//   if (player === "Blue") {
//     playerBluePoints++;
//     setTimeout(() => {
//       alert("Blue Won!");
//       document.getElementById("playerBlueScore").innerHTML =
//         "PlayerBlue: " + playerBluePoints;
//     }, 50);
//   } else {
// }
playerPoints++;
setTimeout(() => {
  alert("You did it!");
  document.getElementById("playerRedScore").innerHTML =
    "Player: " + playerPoints;
}, 50);

  //Remove all elements with the cirkleClass
  setTimeout(() => {
    document.querySelectorAll(".cirkleClass").forEach((e) => e.remove());
    document.querySelectorAll("#taken").forEach((e) => (e.id = ""));
    DrawBoard();
  }, 60);
}

//npc won
function newGame(){
    nPCPoints++;
    document.querySelectorAll(".cirkleClass").forEach((e) => e.remove());
    document.querySelectorAll("#taken").forEach((e) => (e.id = ""));
    DrawBoard();
    document.getElementById("playerBlueScore").innerHTML =
    "NPC: " + nPCPoints;
}

function Npc() {
  if (!playerTurn) {
    let squareArrayValues = [];

    for (let i = 0; i < squareArray.length; i++) {
      if (squareArray[i].childElementCount === 0) {
        squareArrayValues[i] = 0;
      } else if (squareArray[i].firstChild.style.backgroundColor === "blue") {
        squareArrayValues[i] = 1;
      } else {
        squareArrayValues[i] = 2;
      }
    }

    let possibleMoves = [];

    for (let i = 0; i < squareArrayValues.length; i++) {
      if (squareArrayValues[i] === 0) {
        possibleMoves.push(i);
      }
    }
    let randomMove = Math.floor(Math.random() * possibleMoves.length);

    setTimeout(() => {
      if (squareArray[possibleMoves[randomMove]].id != "taken") {
        playerTurn = !playerTurn;
        squareArray[possibleMoves[randomMove]].id = "taken";
        let c = document.createElement("div");
        c.style.height = "75%";
        c.style.width = "75%";
        c.style.borderRadius = "50%";
        c.id = "cirkle";
        c.className = "cirkleClass";
        c.style.backgroundColor = "red";
        squareArray[possibleMoves[randomMove]].appendChild(c);
        fourInARowCheck();
        playerTurnHeading();
      }
    }, 1000);
  }
}
