
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
 arr = shuffle(cards), counter = 0, counterAr = [];
 board = document.getElementById("game-table");
for(i in arr){
    let elem = document.createElement("div");
    elem.className = "card"
    elem.id = i;
    elem.onmouseover = function(){
        elem.className = "card-over"
}
    elem.onmouseleave = function(){
        elem.className = "card"
}
    counterAr[i] = 0;
    elem.onclick = function(){
        counterAr[this.id]++;
        let dc = counterAr.find((value)=>value > 1);
        if(counter < 2 || (dc && counter < dc + 1)){
            counter++;
            elem.innerText = arr[this.id];
}
}
    board.appendChild(elem);
}




   

