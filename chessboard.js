//create a chessboard with js


var board = ''
size = 8

for (let r = 0; r < size; r++){
  for (let c = 0; c < size; c++){
    if ((r + c) % 2 == 0){
      board += ' ';
    }else{
      board += '#';
      }
  }
   board += '\n';
}
console.log(board)
