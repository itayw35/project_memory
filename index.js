function shuffle(arr) {
  let newArr = arr.slice(0, cardsNum / 2),
    shuffledArr = [],
    card2 = "",
    i = 0,
    i2 = 0;
  newArr = newArr.concat(newArr);
  shuffledArr = newArr;
  for (n of newArr) {
    (i = Math.round(Math.random() * (newArr.length - 1))),
      (i2 = Math.round(Math.random() * (newArr.length - 1)));
    card2 = shuffledArr[i2];
    shuffledArr[i2] = shuffledArr.splice(i, 1, card2).toString();
  }
  return shuffledArr;
}
function openCards(arr, elem) {
  if (!arr.find((value) => value == elem)) {
    arr.push(elem);
  }
  elem.classList.add("flip");
  document.getElementById("i" + elem.id).classList.add("open-image");
  return arr;
}
let timeout;
function isEqual(arr) {
  if (shuffledCards[arr[0].id] == shuffledCards[arr[1].id]) {
    timeout = setTimeout(equalCards, 2000, arr);
    const mySound = document.getElementById("sound");
    mySound.play();
    let msg = document.createElement("div");
    msg.innerText = "Well Done!";
    msg.id = "msg";
    board.appendChild(msg);
    timeout = setTimeout(closeMsg, 1500);
    pairsCounter++;
    return true;
  } else {
    timeout = setTimeout(closeCards, 2000, arr);
    turn++;
    return false;
  }
}
function closeMsg() {
  board.removeChild(msg);
}
function closeCards(arr) {
  arr[0].classList.remove("flip");
  arr[1].classList.remove("flip");
  return arr;
}
function equalCards(arr) {
  arr[0].classList.add("equal");
  document.getElementById("i" + arr[0].id).classList.remove("open-image");
  arr[1].classList.add("equal");
  document.getElementById("i" + arr[1].id).classList.remove("open-image");

  return arr;
}
function changePlayer(obj) {
  board.style.backgroundColor = `rgb(${obj.r},${obj.g},${obj.b})`;
  headline.innerText = `Memory Game\nPlayer: ${obj.playerName}`;
  score.innerText = `Score: ${obj.score}`;
  const scoreSheet = document.getElementById("score-sheet");
  const header = document.querySelector("header");
  header.removeChild(scoreSheet);
  if (players.length > 1) {
    const scoreSheet = document.createElement("div");
    scoreSheet.id = "score-sheet";
    header.appendChild(scoreSheet);
    let tempPlayers = players.filter((value) => value != players[turn]);
    tempPlayers.forEach((value, index) => {
      elem = document.createElement("div");
      elem.id = "ss" + index;
      elem.innerText = `${value.playerName}: \t${value.score}`;
      elem.style.color = `rgb(${value.r},${value.g},${value.b})`;
      scoreSheet.appendChild(elem);
      header.style.justifyContent = "flex-end";
    });
  }
}
function isWinning() {
  let winner = { name: "", score: 0 };
  players.forEach((value, index) => {
    if (value.score > winner.score) {
      winner.score = value.score;
      winner.name = players[index].playerName;
    }
  });
  let winners = players.filter((value) => value.score == winner.score);
  if (winners.length > 1) {
    let message = "";
    for (i = 0; i < winners.length - 1; i++) {
      message += winners[i].playerName + " " + "&" + " ";
    }
    message += winners[winners.length - 1].playerName + "" + "win!";
    alert(message);
  } else {
    alert(`${winner.name} wins`);
  }
  const mySound2 = document.getElementById("sound2");
  mySound2.play();
}
function setPlayer(name) {
  return {
    playerName: name,
    score: 0,
    r: Math.round(Math.random() * 255),
    g: Math.round(Math.random() * 255),
    b: Math.round(Math.random() * 255),
  };
}
let playersNum = Number(prompt("How many players in the game?")),
  players = [];
playersNum = playersCheck(playersNum);
for (i = 0; i < playersNum; i++) {
  let playerN = prompt("Enter player name");
  players.push(setPlayer(playerN));
}
let cardsNum = Number(prompt("How many cards in the game? [2-20]"));
function cardsCheck(cardsN) {
  while (cardsN > 20 || cardsN % 2 == 1 || !Number(cardsN) || cardsN <= 0) {
    cardsN = Number(prompt("please choose an even number between 2 - 20"));
  }
  return cardsN;
}
function playersCheck(playersN) {
  while (!Number(playersN) || playersN <= 0) {
    playersN = Number(prompt("please enter a positive number"));
  }
  return playersN;
}
cardsNum = cardsCheck(cardsNum);

let cards = [
    "imageedit_1_2405853986.png",
    "98c17b.png",
    "imageedit_3_9523258067.png",
    "imageedit_2_5273722075.png",
    "imageedit_2_3338791113.png",
    "הורדה-removebg-preview.png",
    "images-removebg-preview.png",
    "panda-34-removebg-preview.png",
    "rainbow-removebg-preview.png",
    "shutterstock_587596124_web-removebg-preview.png",
  ],
  shuffledCards = shuffle(cards),
  counter = 0,
  pairsCounter = 0,
  counterAr = [],
  openedCards = [],
  turn = 0;
const board = document.getElementById("Player1");
for (i in shuffledCards) {
  let elem = document.createElement("div");
  elem.className = "card";
  elem.id = i;
  board.appendChild(elem);
  let elem2 = document.createElement("div");
  elem2.className = "card-inner";
  elem.appendChild(elem2);
  let elem3 = document.createElement("div");
  elem3.className = "card-front";
  elem2.appendChild(elem3);
  let elem4 = document.createElement("h3");
  elem4.innerText = "Memory Game";
  elem3.appendChild(elem4);
  let elem5 = document.createElement("div");
  elem5.className = "card-back";
  elem2.appendChild(elem5);
  let elem6 = document.createElement("img");
  elem6.src = shuffledCards[i];
  elem6.alt = Image;
  elem6.className = "image";
  elem6.id = "i" + elem.id;
  elem5.appendChild(elem6);
}
const headline = document.getElementById("headline");
const score = document.getElementById("score");
const ss = document.getElementById("ss");
changePlayer(players[0]);
for (i in shuffledCards) {
  counterAr[i] = 0;
  document.getElementById(i).onclick = function () {
    counterAr[this.id]++;
    let dc = counterAr.find((value) => value > 1);
    if (counter < 2 || (dc && counter < dc + 1)) {
      counter++;
      if (turn < playersNum) {
        openedCards = openCards(openedCards, this);
        if (openedCards.length > 1) {
          if (isEqual(openedCards)) {
            players[turn].score++;
            score.innerText = `Score: ${players[turn].score}`;
          } else {
            if (turn == playersNum) {
              turn = 0;
            }
            timeout = setTimeout(changePlayer, 2500, players[turn]);
          }
          counter = 0;
          openedCards = [];
          for (i2 in counterAr) {
            counterAr[i2] = 0;
          }
        }
      }
      if (pairsCounter == cardsNum / 2) {
        isWinning();
      }
    }
  };
}
