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
        elem.classList.add("flip");
        document.getElementById("i" + elem.id).classList.add("open-image");
        return arr;
}
let timeout;
function isEqual(arr){
        if(shuffledCards[arr[0].id] == shuffledCards[arr[1].id]){
                timeout = setTimeout(equalCards,2000,arr);
                alert("well done!");
                pairsCounter++;
                return true;
    }
        else{  
           timeout = setTimeout(closeCards,2000,arr);
            turn++;
            return false;
        }
    }
function closeCards(arr){
    arr[0].classList.remove("flip");
    arr[1].classList.remove("flip");
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
function isWinning(){
    if(pairsCounter == cards.length){
        alert((players[0].score > players[1].score)? `${players[0].playerName} wins`:
        `${players[1].playerName} wins`);
    }
}
    
    
let cards = ["imageedit_1_2405853986.png", "98c17b.png", "imageedit_3_9523258067.png", "imageedit_2_5273722075.png", "imageedit_2_3338791113.png"],
 shuffledCards = shuffle(cards), counter = 0, pairsCounter = 0, counterAr = [], 
 openedCards = [], turn = 0,
 players = [
     {playerName: "Player1", score: 0},
     {playerName: "Player2", score: 0},
 ];
 const board = document.getElementById("Player1");
 function createCards(){
    for(i in shuffledCards){
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
}
createCards();
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
        isWinning();
    }
}      
}



