const gameBoard = (() => {
    let row1 = [0,0,0];
    let row2 = [0,0,0];
    let row3 = [0,0,0];


    return {row1, row2, row3};
});

const gameInterface = (board) => {

    let win = () => {
        if(board.row1[0]===1 && board.row2[0]===1 && board.row3[0]===1 || board.row1[1]===1 && board.row2[1]===1 && board.row3[1]===1 || board.row1[2]===1 && board.row2[2]===1 && board.row3[2]===1){
            return true;
        };
        if(board.row1[0]===2 && board.row2[0]===2 && board.row3[0]===2 || board.row1[1]===2 && board.row2[1]===2 && board.row3[1]===2 || board.row1[2]===2 && board.row2[2]===2 && board.row3[2]===2){
            return true;
        };
    
        if(board.row1[0]===1 && board.row1[1]===1 && board.row1[2]===1 || board.row2[0]===1 && board.row2[1]===1 && board.row2[2]===1 || board.row3[0]===1 && board.row3[1]===1 && board.row3[2]===1){
            return true;
        };
        if(board.row1[0]===2 && board.row1[1]===2 && board.row1[2]===2 || board.row2[0]===2 && board.row2[1]===2 && board.row2[2]===2 || board.row3[0]===2 && board.row3[1]===2 && board.row3[2]===2){
            return true;
        };
        if(board.row1[0]===1 && board.row2[1]===1 && board.row3[2]===1 ||board.row1[2]===1 && board.row2[1]===1 && board.row3[0]===1){
            return true;
        };
    
        if(board.row1[0]===2 && board.row2[1]===2 && board.row3[2]===2 || board.row1[2]===2 && board.row2[1]===2 && board.row3[0]===2){
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


    const moveX = (row, col) => {
        if(win()){
            return;
        } else{
            if(row === 1){
                if(isEmpty(board.row1[col])){
                    board.row1[col] = 1;
                }
            }else if(row===2){
                if(isEmpty(board.row2[col])){
                    board.row2[col] = 1;
                }
            }else if(row===3){
                if(isEmpty(board.row3[col])){
                    board.row3[col] = 1;
                }
            }
        }
       
    };

    const moveO = (row, col) => {
        if(win()){
            return;
        }else{
            if(row === 1){
                if(isEmpty(board.row1[col])){
                    board.row1[col] = 2;
                }
            }else if(row===2){
                if(isEmpty(board.row2[col])){
                    board.row2[col] = 2;
                }
            }else if(row===3){
                if(isEmpty(board.row3[col])){
                    board.row3[col] = 2;
                }
            }
        }
    };

    return {moveO, moveX, win};
}; 

const Player = () => {
    let turn = false;

    const turnStart = () => {
        turn = true;
    };

    const turnEnd = () => {
        turn = false;
    };

    return {turnStart, turnEnd};
};

const playBoard = new gameBoard();
const userInterface = new gameInterface(playBoard);
const player1 = Player();
const player2 = Player();

const first = document.querySelector("#1,0");
const second = document.querySelector("#1,1");
const third = document.querySelector("#1,2");
const fourth = document.querySelector("#2,0");
const fifth = document.querySelector("#2,1");
const sixth = document.querySelector("#2,2");
const seventh = document.querySelector("#3,0");
const eighth = document.querySelector("#3,1");
const ninth = document.querySelector("#3,2");
