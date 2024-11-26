function solution(n) {
  const snailArray = Array.from({ length: n }, () => Array(n).fill(0));

  let num = 1;

  let startRow = 0,
    endRow = n - 1;
  let startCol = 0,
    endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      snailArray[startRow][i] = num;
      num += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i++) {
      snailArray[i][endCol] = num;
      num += 1;
    }
    endCol -= 1;

    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        snailArray[endRow][i] = num;
        num += 1;
      }
      endRow -= 1;
    }

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        snailArray[i][startCol] = num;
        num += 1;
      }
      startCol += 1;
    }
  }

  return snailArray;
}

console.log(solution(3));

console.log(solution(4));
