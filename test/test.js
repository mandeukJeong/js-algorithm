function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const sum = [0, 0, 0];

  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < answers.length; j++) {
      if (students[i][j % students[i].length] === answers[j]) {
        sum[i]++;
      }
    }
  }

  const max = Math.max(...sum);
  const result = [];

  for (let i = 0; i < sum.length; i++) {
    if (max === sum[i]) {
      result.push(i + 1);
    }
  }

  return result;
}
