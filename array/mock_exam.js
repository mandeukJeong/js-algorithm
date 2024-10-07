function solution(answers) {
  let maxNum = 0;
  const student1 = [1, 2, 3, 4, 5];
  const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const count = [0, 0, 0];

  const result = [];

  for (let i = 0; i < answers.length; i++) {
    let tmp = i;

    if (student1.length < answers.length) {
      tmp = i - student1.length;
    } else {
      tmp = i;
    }

    if (answers[i] === student1[tmp]) {
      count[0]++;
    }

    if (student2.length < answers.length) {
      tmp = i - student2.length;
    } else {
      tmp = i;
    }

    if (answers[i] === student2[tmp]) {
      count[1]++;
    }

    if (student3.length < answers.length) {
      tmp = i - student3.length;
    } else {
      tmp = i;
    }

    if (answers[i] === student3[tmp]) {
      count[2]++;
    }
  }

  for (let i = 0; i < 3; i++) {
    if (maxNum <= count[i]) {
      maxNum = count[i];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (maxNum === count[i]) {
      result.push(i + 1);
    }
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
