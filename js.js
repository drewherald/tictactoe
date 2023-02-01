const gameBoard = (() => {
    let row1 = [0,0,0];
    let row2 = [0,0,0];
    let row3 = [0,0,0];

    let win = () => {
        if(row1[0]===1 && row2[0]===1 && row3[0]===1 || row1[1]===1 && row2[1]===1 && row3[1]===1 || row1[2]===1 && row2[2]===1 && row3[2]===1){
            return true;
        };
        if(row1[0]===2 && row2[0]===2 && row3[0]===2 || row1[1]===2 && row2[1]===2 && row3[1]===2 || row1[2]===2 && row2[2]===2 && row3[2]===2){
            return true;
        };
    
        if(row1[0]===1 && row1[1]===1 && row1[2]===1 || row2[0]===1 && row2[1]===1 && row2[2]===1 || row3[0]===1 && row3[1]===1 && row3[2]===1){
            return true;
        };
        if(row1[0]===2 && row1[1]===2 && row1[2]===2 || row2[0]===2 && row2[1]===2 && row2[2]===2 || row3[0]===2 && row3[1]===2 && row3[2]===2){
            return true;
        };
        if(row1[0]===1 && row2[1]===1 && row3[2]===1 || row1[2]===1 && row2[1]===1 && row3[0]===1){
            return true;
        };
    
        if(row1[0]===2 && row2[1]===2 && row3[2]===2 || row1[2]===2 && row2[1]===2 && row3[0]===2){
            return true;
        };

        return false;
    };
   


    const moveX = (row, col) => {
        if(win()){
            return;
        } else{
            if(row === 1){
                if(row1[col]!=0){
                    row1[col] = 1;
                }
            }else if(row===2){
                if(row2[col]!=0){
                    row2[col] = 1;
                }
            }else if(row===3){
                if(row3[col]!=0){
                    row3[col] = 1;
                }
            }
        }
       
    }

    const moveO = (row, col) => {
        if(win()){
            return;
        }else{
            if(row === 1){
                if(row1[col]!=0){
                    row1[col] = 2;
                }
            }else if(row===2){
                if(row2[col]!=0){
                    row2[col] = 2;
                }
            }else if(row===3){
                if(row3[col]!=0){
                    row3[col] = 2;
                }
            }
        }
    }

    return {moveX,moveO};
});

const gameInterface = (board) => {
    
}; 

