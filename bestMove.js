function bestMove(state, depth, player){
    var best;

    if(player == AI){
        best = [-10,-10,-1000];
    }
    else{
        best = [-10,-10,+1000];
    }

    if(depth ==0 || allOver(cell)){
        var score = evaluate(state);
        return [-10,-10, score];
    }

    emptyCells(state).forEach(function(cell){
        var x = cell[0];
        var y = cell[1];
        state[x][y] = player;
        var score = bestMove(state, depth-1, -player);
        state[x][y] = 0;
        score[0]=x;
        score[1]=y;

        if(player == AI){
            if(score[2]>best[2])
                best = score;
        }
        else{
            if(score[2<best[2]])
                best = score;
        }
    });

    return best;
}

function aiMove(){
   var x, y;
   var move;
   var cell;

   if (emptyCells(board).length == 9){
        x = parseInt(Math.random()*3);
        y = parseInt(Math.random()*3);
   }
   else{
       move = bestMove(board, emptyCells(board).length, AI);
       x = move[0];
       y = move[1];
   }

   if(setMove(x, y, AI)){
       cell = document.getElementById(String(x)+String(y));
       cell.innerHTML = 'AI';
   }
}