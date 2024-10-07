function solution(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const tmp = [];

    for (let j = 0; j < arr1[i].length; j++) {
      for (let k = 0; k < arr2[j].length; k++) {
        if (tmp[k]) {
          tmp[k] += arr1[i][j] * arr2[j][k];
        } else {
          tmp.push(arr1[i][j] * arr2[j][k]);
        }
      }
    }

    result.push(tmp);
  }
  return result;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
);

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
