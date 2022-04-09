
function shuffle(arr){
    let newArr = arr, shuffledArr = [], card1 = "", card2 = "", i =0, i2 = 0;
        newArr = newArr.concat(arr);
    shuffledArr = newArr;
    for(n of newArr){
    i = Math.round(Math.random() * (newArr.length - 1)), i2 = Math.round(Math.random() * (newArr.length - 1));
    card1 = shuffledArr[i];
    card2 = shuffledArr[i2];
    shuffledArr.splice(i,1,card2);
    shuffledArr.splice(i2,1,card1);
}
return shuffledArr;
}
let cards = ["A", "B", "C", "D", "E"],
 arr = shuffle(cards);

let board = document.getElementById("game-table");
for(n of arr){
let elem = document.createElement("div");
elem.innerText = n;
elem.className = "card"
elem.onmouseover = function(){
elem.className = "card-over"
}
elem.onmouseleave = function(){
    elem.className = "card"
}
board.appendChild(elem);
}