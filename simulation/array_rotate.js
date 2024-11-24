function solution(arr, n) {
  function rotate90(arr) {
    const n = arr.length;

    const rotated = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        rotated[j][n - i - 1] = arr[i][j];
      }
    }

    return rotated;
  }

  let rotated = arr.map((row) => [...row]);

  for (let i = 0; i < n; i++) {
    rotated = rotate90(rotated);
  }

  return rotated;
}

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    1
  )
);

console.log(
  solution(
    [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ],
    2
  )
);
