
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
 arr = shuffle(cards), counter = 0, counterAr = [],
 pairsCounter = 0, openedCards = [];
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
debugger
    counterAr[i] = 0;
    elem.onclick = function(){
        counterAr[this.id]++;
        let dc = counterAr.find((value)=>value > 1);
        if(counter < 2 || (dc && counter < dc + 1)){
            counter++;
            if(!(openedCards.find((value)=> value == elem))){
                openedCards.push(elem);
                }
                elem.innerText = arr[this.id];
    }
            else{
                if(openedCards[0].innerText == openedCards[1].innerText){
                    openedCards[0].className = "equal";
                    openedCards[1].className = "equal";
                    alert("well done!");
                    counter = 0;
                    pairsCounter++;
                    openedCards = [];
                    for(i in counterAr){
                        counterAr[i] = 0;
                        if(pairsCounter == cards.length - 1){
                            alert("congrats! you won the game!")
                        }
                    }
                    }
                else{  
                    openedCards[0].innerText = "";
                    openedCards[1].innerText = "";
                    counter = 0;
                    openedCards = [];
                    for(i in counterAr){
                        counterAr[i] = 0;
                }
            }
            }
          
        }
    board.appendChild(elem);
}





   

