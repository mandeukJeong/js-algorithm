function solution(decimal) {
  const stack = [];
  let tmp = decimal;

  while (true) {
    if (tmp !== 0) {
      stack.push(tmp % 2);
      tmp = Math.trunc(tmp / 2);
    } else {
      break;
    }
  }

  return stack.reverse().join('');
}

console.log(solution(10));
console.log(solution(27));
console.log(solution(12345));
