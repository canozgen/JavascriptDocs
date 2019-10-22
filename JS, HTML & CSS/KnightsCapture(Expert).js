function cannotCapture(board){
    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            if(board[i][j]==1)
            {
                if(check(i,j,board)){
                    return false;
                }
            }
        }
    }
    return true;
}
function check(x,y,board){    
    for(ix=0;ix<8;ix++){
        for(jy=0;jy<8;jy++){
            if(Math.pow(Math.abs(jy-y),2)+Math.pow(Math.abs(ix-x),2)==5 && board[ix][jy]==1){
                return true;
            }
        }
    }
    return false;
}

console.log(cannotCapture([
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0]
  ]))