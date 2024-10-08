function solution(board, moves) {
  let answer = 0;
  const boards = [];
  const stack = [];
  moves = moves.map((item) => item - 1);

  for (let i = 0; i < board.length; i++) {
    boards.push([]);
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = board.length - 1; j >= 0; j--) {
      if (board[j][i] !== 0) {
        boards[i].push(board[j][i]);
      }
    }
  }

  for (let i = 0; i < moves.length; i++) {
    if (boards[moves[i]].length > 0) {
      if (stack.length === 0) {
        stack.push(boards[moves[i]].pop());
        continue;
      }

      if (
        stack.length > 0 &&
        stack[stack.length - 1] ===
          boards[moves[i]][boards[moves[i]].length - 1]
      ) {
        stack.pop();
        answer++;
        boards[moves[i]].pop();
      } else {
        stack.push(boards[moves[i]].pop());
      }
    }
  }

  return answer * 2;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
