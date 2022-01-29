//Draw board
for(let x = 0; x < 6; x++){

    for(let i = 0; i < 6; i++){

        let s = document.createElement("div");

        if(x%2 == 0){
            if(i % 2 == 0 ){
                s.style.backgroundColor = "white";
            }else{
                s.style.backgroundColor = "black";
            }
        }else{
            if(i % 2 == 0 ){
                s.style.backgroundColor = "black";
            }else{
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
        s.addEventListener("click", function() {addCirkle(this)});
        document.getElementById("flexContainer").appendChild(s);
    }
}

let squareArray = document.getElementsByClassName("sqrClass");

let playerTurn = false;

let playerBluePoints = 0;
let playerRedPoints = 0;

let placeCirkleSound = new Audio('./Sound/Succes.wav');
let placeCirkleFailedSound = new Audio('./Sound/Fail.wav');
let winSound = new Audio('./Sound/Win.wav');

playerTurnHeading();

function addCirkle(square){
    if(square.id != "taken"){
        
        square.id = "taken";
        playerTurn = !playerTurn;
        let c = document.createElement("div");
        c.style.height = "75%";
        c.style.width = "75%";
        c.style.borderRadius = "50%";
        c.id = "cirkle";
        c.className = "cirkleClass";

        if(playerTurn){
            c.style.backgroundColor = "blue";
        }else{
            c.style.backgroundColor = "red";
        }

        square.appendChild(c);
        threeInARowCheck();
        playerTurnHeading();
    }else{
                $(square).animate({opacity: '0.4' }, "fast");
                $(square).animate({opacity: '1' }, "slow");
                placeCirkleFailedSound.play();
            }
}

function threeInARowCheck(){

    let squareArrayValues = [];

    for(let i = 0; i < squareArray.length; i++){
        if(squareArray[i].childElementCount === 0){
            squareArrayValues[i] = 0;
        }else if(squareArray[i].firstChild.style.backgroundColor === "blue"){
            squareArrayValues[i] = 1;
        }else{
            squareArrayValues[i] = 2;
        }
    }

    //Horizontal check
    let x = 0;
    for(let vr = 0; vr < 6; vr++){

        for(let hr = x; hr < x+6; hr++){
            if(squareArrayValues[hr] === squareArrayValues[hr+1] && squareArrayValues[hr] === squareArrayValues[hr+2] && squareArrayValues[hr] === squareArrayValues[hr+3] && squareArrayValues[hr] != 0){
                if(squareArrayValues[hr] === 1){
                    Win("Blue");
                }else{
                    Win("Red");
                }
                return;
            }
        }
        
        x += 6;
    }

    //Vertical check
    for(let hr = 0; hr < 6; hr++){

        for(let vr = hr; vr < 36; vr+=6){
            if(squareArrayValues[vr] === squareArrayValues[vr+6] && squareArrayValues[vr] === squareArrayValues[vr+12] && squareArrayValues[vr] === squareArrayValues[vr+18] && squareArrayValues[vr] != 0){
                if(squareArrayValues[vr] === 1){
                    Win("Blue");
                }else{
                    Win("Red");
                }
                return;
            }
        }
    }

    //Diagonal falling right check

    for(let hr = 0; hr < 4; hr++){
        for(let vr = hr; vr < 36; vr+=7){
            if(squareArrayValues[vr] === squareArrayValues[vr+7] && squareArrayValues[vr] === squareArrayValues[vr+14] && squareArrayValues[vr] === squareArrayValues[vr+21] && squareArrayValues[vr] != 0){
                if(squareArrayValues[vr] === 1){
                    Win("Blue");
                }else{
                    Win("Red");
                }
                return;
            }
        }
    }

    for(let vr = 6; vr < 22; vr+=6){
        for(let hr = vr; hr < 36; hr+=7){
            if(squareArrayValues[hr] === squareArrayValues[hr+7] && squareArrayValues[hr] === squareArrayValues[hr+14] && squareArrayValues[hr] === squareArrayValues[hr+21] && squareArrayValues[hr] != 0){
                if(squareArrayValues[hr] === 1){
                    Win("Blue");
                }else{
                    Win("Red");
                }
                return;
            }
        }
    }

    //Diagonal falling left check

    for(let hr = 5; hr > 1; hr-=1){
        for(let vr = hr; vr < 36; vr+=5){
            if(squareArrayValues[vr] === squareArrayValues[vr+5] && squareArrayValues[vr] === squareArrayValues[vr+10] && squareArrayValues[vr] === squareArrayValues[vr+15] && squareArrayValues[vr] != 0){
                if(squareArrayValues[vr] === 1){
                    Win("Blue");
                }else{
                    Win("Red");
                }
                return;
            }
        }
    }

        for(let vr = 11; vr < 36; vr+=5){
            if(squareArrayValues[vr] === squareArrayValues[vr+5] && squareArrayValues[vr] === squareArrayValues[vr+10] && squareArrayValues[vr] === squareArrayValues[vr+15] && squareArrayValues[vr] != 0){
                if(squareArrayValues[vr] === 1){
                    Win("Blue");
                }else{
                    Win("Red");
                }
                return;
            }
        }

    //Tie/board full check
    let boardEmpty = false;
    for(let i = 0; i < squareArrayValues.length; i++){
        if(squareArrayValues[i] === 0){
            boardEmpty = false;
            break;
        }else{
            boardEmpty = true;
        }
    }
    if(boardEmpty){
        alert("Tie!");
        document.querySelectorAll('.cirkleClass').forEach(e => e.remove());
        document.querySelectorAll('#taken').forEach(e => e.id = '');
    }
    placeCirkleSound.play();
}

function playerTurnHeading(){
    let pC = document.createElement("div");
    pC.style.height = "3vh";
    pC.style.width = "3vh";
    pC.style.borderRadius = "50%";
    pC.style.display = "inline-block";


    if(playerTurn){
        pC.style.backgroundColor = "red";
        document.getElementById("playerHeading").innerHTML = "PlayerRed ";
        document.getElementById("playerHeading").appendChild(pC);
    }else{
        pC.style.backgroundColor = "blue";
        document.getElementById("playerHeading").innerHTML = "PlayerBlue ";
        document.getElementById("playerHeading").appendChild(pC);
    }
}

function Win(player){
    winSound.play();
    if(player === "Blue"){
        playerBluePoints++;
        document.getElementById("playerBlueScore").innerHTML = "PlayerBlue: " + playerBluePoints;
        setTimeout(() => { alert("Blue Won!"); }, 20);
    }else{
        playerRedPoints++;
        document.getElementById("playerRedScore").innerHTML = "PlayerRed: " + playerRedPoints;
        setTimeout(() => { alert("Red Won!"); }, 20);
    }

    //Remove all elements with the cirkleClass
    setTimeout(() => { document.querySelectorAll('.cirkleClass').forEach(e => e.remove());
    document.querySelectorAll('#taken').forEach(e => e.id = ''); }, 25);
}