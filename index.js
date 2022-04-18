
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
let cards = ["😜", "🥰", "🍕", "🐨", "💐"];
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
    board.appendChild(elem);
}
for(i in arr){
    counterAr[i] = 0;
    document.getElementById(i).onclick = function(){
    counterAr[this.id]++;
    let dc = counterAr.find((value)=>value > 1);
    if(counter < 2 || (dc && counter < dc + 1)){
        counter++;
        if(!(openedCards.find((value)=> value == this))){
        openedCards.push(this);
        }
        this.innerText = arr[this.id];
            if( openedCards.length > 1 && openedCards[0].innerText == openedCards[1].innerText){
                openedCards[0].className = "equal";
                openedCards[1].addEventListener("mouseleave", ()=> {
                    this.className = "equal"
                })
                alert("well done!")
                counter = 0;
                pairsCounter++;
                if(pairsCounter == cards.length){ 
                    alert("congrats! you won the game!");
                }
                openedCards = [];
                for(i in counterAr){
                    counterAr[i] = 0;
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






   

