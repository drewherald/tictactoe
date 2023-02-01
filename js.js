const rowOne = document.querySelector(".rowOne");
const rowTwo = document.querySelector(".rowTwo");
const rowThree = document.querySelector(".rowThree");
const first = document.querySelector("#one");
first.innerHTML =  '\u2060'; rowOne.appendChild(first);
const second = document.querySelector("#two");
second.innerHTML =  '\u2060'; rowOne.appendChild(second);
const third = document.querySelector("#three");
third.innerHTML =  '\u2060'; rowOne.appendChild(third);
const fourth = document.querySelector("#four");
fourth.innerHTML =  '\u2060'; rowTwo.appendChild(fourth);
const fifth = document.querySelector("#five");
fifth.innerHTML =  '\u2060'; rowTwo.appendChild(fifth);
const sixth = document.querySelector("#six");
sixth.innerHTML =  '\u2060'; rowTwo.appendChild(sixth);
const seventh = document.querySelector("#seven");
seventh.innerHTML =  '\u2060'; rowThree.appendChild(seventh);
const eighth = document.querySelector("#eight");
eighth.innerHTML =  '\u2060'; rowThree.appendChild(eighth);
const ninth = document.querySelector("#nine");
ninth.innerHTML =  '\u2060'; rowThree.appendChild(ninth);
const content = document.querySelector(".content");
const hold = document.querySelector(".hold");



const gameBoard = (() => {
    let row1 = [0,0,0];
    let row2 = [0,0,0];
    let row3 = [0,0,0];

    return {row1, row2, row3};
});

const gameInterface = (board) => {

    let turnCounter = 0;

    let win = () => {
        if(board.row1[0]===1 && board.row2[0]===1 && board.row3[0]===1 || board.row1[1]===1 && board.row2[1]===1 && board.row3[1]===1 || board.row1[2]===1 && board.row2[2]===1 && board.row3[2]===1){
            content.innerHTML =  "Congrats, Player One Wins!";
            hold.replaceChild(content, content);
            return true;
        };
        if(board.row1[0]===2 && board.row2[0]===2 && board.row3[0]===2 || board.row1[1]===2 && board.row2[1]===2 && board.row3[1]===2 || board.row1[2]===2 && board.row2[2]===2 && board.row3[2]===2){
            content.innerHTML =  "Congrats, Player Two Wins!";
            hold.replaceChild(content, content);
            return true;
        };
    
        if(board.row1[0]===1 && board.row1[1]===1 && board.row1[2]===1 || board.row2[0]===1 && board.row2[1]===1 && board.row2[2]===1 || board.row3[0]===1 && board.row3[1]===1 && board.row3[2]===1){
            content.innerHTML =  "Congrats, Player One Wins!";
            hold.replaceChild(content, content);
            return true;
        };
        if(board.row1[0]===2 && board.row1[1]===2 && board.row1[2]===2 || board.row2[0]===2 && board.row2[1]===2 && board.row2[2]===2 || board.row3[0]===2 && board.row3[1]===2 && board.row3[2]===2){
            content.innerHTML =  "Congrats, Player Two Wins!";
            hold.replaceChild(content, content);
            return true;
        };
        if(board.row1[0]===1 && board.row2[1]===1 && board.row3[2]===1 ||board.row1[2]===1 && board.row2[1]===1 && board.row3[0]===1){
            content.innerHTML =  "Congrats, Player One Wins!";
            hold.replaceChild(content, content);
            return true;
        };
    
        if(board.row1[0]===2 && board.row2[1]===2 && board.row3[2]===2 || board.row1[2]===2 && board.row2[1]===2 && board.row3[0]===2){
            content.innerHTML =  "Congrats, Player Two Wins!";
            hold.replaceChild(content, content);
            return true;
        };

        return false;
    };
   

    const isEmpty = (item) => {
        if(item===0){
            return true;
        }else{
            return false;
        }
    };

    const endCheck = () => {
        if(win()){
            win();
        } else if(turnCounter>=9){
            content.innerHTML =  "Sorry, it's a tie!";
            hold.replaceChild(content, content);
        }

    };


    const moveX = (row, col) => {
        if(win()){
            return;
        } else if(turnCounter>=9){
            return;
        }else{
            if(row === 1){
                if(isEmpty(board.row1[col])){
                    board.row1[col] = 1;
                    turnCounter++;
                    if(col==0){
                        first.innerHTML =  "X";
                        rowOne.replaceChild(first, first);
                    }
                    if(col==1){
                        second.innerHTML = "X";
                        rowOne.replaceChild(second,second);
                    }
                    if(col==2){
                        third.innerHTML = "X";
                        rowOne.replaceChild(third,third);
                    }
                }
            }else if(row===2){
                if(isEmpty(board.row2[col])){
                    board.row2[col] = 1;
                    turnCounter++;
                    if(col==0){
                        fourth.innerHTML =  "X";
                        rowTwo.replaceChild(fourth, fourth);
                    }
                    if(col==1){
                        fifth.innerHTML = "X";
                        rowTwo.replaceChild(fifth,fifth);
                    }
                    if(col==2){
                        sixth.innerHTML = "X";
                        rowTwo.replaceChild(sixth,sixth);
                    }
                }
            }else if(row===3){
                if(isEmpty(board.row3[col])){
                    board.row3[col] = 1;
                    turnCounter++;
                    if(col==0){
                        seventh.innerHTML =  "X";
                        rowThree.replaceChild(seventh, seventh);
                    }
                    if(col==1){
                        eighth.innerHTML = "X";
                        rowThree.replaceChild(eighth,eighth);
                    }
                    if(col==2){
                        ninth.innerHTML = "X";
                        rowThree.replaceChild(ninth,ninth);
                    }
                }
            }
        }
       endCheck();
    };

    const moveO = (row, col) => {
        if(win()){
            return;
        }else if(turnCounter>=9){
            return;
        }else{
            if(row === 1){
                if(isEmpty(board.row1[col])){
                    board.row1[col] = 2;
                    turnCounter++;
                    if(col==0){
                        first.innerHTML =  "O";
                        rowOne.replaceChild(first, first);
                    }
                    if(col==1){
                        second.innerHTML = "O";
                        rowOne.replaceChild(second,second);
                    }
                    if(col==2){
                        third.innerHTML = "O";
                        rowOne.replaceChild(third,third);
                    }
                }
            }else if(row===2){
                if(isEmpty(board.row2[col])){
                    board.row2[col] = 2;
                    turnCounter++;
                    if(col==0){
                        fourth.innerHTML =  "O";
                        rowTwo.replaceChild(fourth, fourth);
                    }
                    if(col==1){
                        fifth.innerHTML = "O";
                        rowTwo.replaceChild(fifth,fifth);
                    }
                    if(col==2){
                        sixth.innerHTML = "O";
                        rowTwo.replaceChild(sixth,sixth);
                    }
                }
            }else if(row===3){
                if(isEmpty(board.row3[col])){
                    board.row3[col] = 2;
                    turnCounter++;
                    if(col==0){
                        seventh.innerHTML =  "O";
                        rowThree.replaceChild(seventh, seventh);
                    }
                    if(col==1){
                        eighth.innerHTML = "O";
                        rowThree.replaceChild(eighth,eighth);
                    }
                    if(col==2){
                        ninth.innerHTML = "O";
                        rowThree.replaceChild(ninth,ninth);
                    }
                }
            }
        }
        endCheck();
    };

    return {moveO, moveX, win, isEmpty};
}; 

const Player = () => {
    let turn = false;

    const turnStart = () => {
        turn = true;
    };

    const turnEnd = () => {
        turn = false;
    };

    const getTurn = () => {
        return turn;
    }

    return {turnStart, turnEnd, getTurn};
};

const board = gameBoard();
const userInterface = gameInterface(board);
const player1 = Player();
const player2 = Player();
player1.turnStart();




let clickEvent = (row,col) => {
    if(player1.getTurn()){
        userInterface.moveX(row,col);
        player1.turnEnd();
        player2.turnStart();
        console.log(board.row1[0]);
        console.log(player1.getTurn());
        console.log(player2.getTurn());
    }else if(player2.getTurn()){
        userInterface.moveO(row,col);
        player2.turnEnd();
        player1.turnStart();
    }
}

first.addEventListener("click", function(){
    if(userInterface.isEmpty(board.row1[0])){
        clickEvent(1,0);
    }
});

second.addEventListener("click", function(){
    if(userInterface.isEmpty(board.row1[1])){
        clickEvent(1,1);
    }
});

third.addEventListener("click", function(){
    if(userInterface.isEmpty(board.row1[2])){
        clickEvent(1,2);
    }
});

fourth.addEventListener("click", function(){
    if(userInterface.isEmpty(board.row2[0])){
        clickEvent(2,0);
    }
});

fifth.addEventListener("click", function(){
    if(userInterface.isEmpty(board.row2[1])){
        clickEvent(2,1);
    }
});

sixth.addEventListener("click", function(){
    if(userInterface.isEmpty(board.row2[2])){
        clickEvent(2,2);
    }
});

seventh.addEventListener("click", function(){
    if(userInterface.isEmpty(board.row3[0])){
        clickEvent(3,0);
    }
});

eighth.addEventListener("click", function(){
    if(userInterface.isEmpty(board.row3[1])){
        clickEvent(3,1);
    }
});

ninth.addEventListener("click", function(){
    if(userInterface.isEmpty(board.row3[2])){
        clickEvent(3,2);
    }
});
