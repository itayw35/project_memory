function shuffle(arr){
    let  newArr = arr, shuffledArr = [], card1 = "", card2 = "", i =0, i2 = 0;
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
function openCards(arr,elem){
    if(!(arr.find((value)=> value == elem))){
        arr.push(elem);
        }
        elem.innerText = shuffledCards[elem.id];
        return arr;
}
let timeout;
function isEqual(arr){
        if(arr[0].innerText == arr[1].innerText){
                timeout = setTimeout(equalCards,2000,arr);
                alert("well done!");
                pairsCounter++;
                if(pairsCounter == cards.length){
                    alert((players[0].score > players[1].score)? `${players[0].playerName} wins`:
                    `${players[1].playerName} wins`);
                }
            return true;
    }
        else{  
           timeout = setTimeout(closeCards,2000,arr);
            turn++;
            return false;
        }
    }
function closeCards(arr){
    arr[0].innerText = "";
    arr[1].innerText = "";
    return arr;
}
function equalCards(arr){
    arr[0].className = "equal";
    arr[1].className = "equal";
    return arr;
}
function changePlayer(obj){
    board.id = obj.playerName;
    document.getElementById("headline").innerText = `Memory Game: ${obj.playerName}`;
    document.getElementById("score").innerText = `Score: ${obj.score}`;    
}
    
    
let cards = ["😜", "🥰", "🍕", "🐨", "💐"],
 shuffledCards = shuffle(cards), counter = 0, pairsCounter = 0, counterAr = [], 
 openedCards = [], turn = 0,
 players = [
     {playerName: "Player1", score: 0},
     {playerName: "Player2", score: 0},
 ];
 const board = document.getElementById("Player1");
for(i in shuffledCards){
    let elem = document.createElement("div");
    elem.className = "card";
    elem.id = i;
    board.appendChild(elem);
}
for(i in shuffledCards){
    counterAr[i] = 0;
    document.getElementById(i).onclick = function(){
    counterAr[this.id]++;
    let dc = counterAr.find((value)=>value > 1);
    if(counter < 2 || (dc && counter < dc + 1)){
        counter++;
        if(turn % 2 == 0){
            openedCards = openCards(openedCards,this);
            if(openedCards.length > 1){
                if(isEqual(openedCards)){
                    players[0].score++;
                    document.getElementById("score").innerText = `Score: ${players[0].score}`;    
                } 
                else{
                    timeout = setTimeout(changePlayer,2500,players[1]);
                }
                counter = 0;
                openedCards = [];
                for(i in counterAr){
                    counterAr[i] = 0;
            }     
        }
        }
        else{
            openedCards = openCards(openedCards,this);
            if(openedCards.length > 1){
                if(isEqual(openedCards)){
                    players[1].score++;
                    document.getElementById("score").innerText = `Score: ${players[1].score}`;    

                }
                else{
                    timeout = setTimeout(changePlayer,2500,players[0]);
                }
                counter = 0;
                    openedCards = [];
                    for(i in counterAr){
                        counterAr[i] = 0;
                }  
            }
        }
    }
}      
}

