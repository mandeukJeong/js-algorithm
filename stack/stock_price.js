function solution(prices) {
  const stack = [];

  for (let i = 0; i < prices.length; i++) {
    let count = 0;

    if (i === prices.length - 1) {
      stack.push(count);
      break;
    }

    for (let j = i + 1; j < prices.length; j++) {
      count++;

      if (prices[i] > prices[j]) {
        break;
      }
    }

    stack.push(count);
  }

  return stack;
}

console.log(solution([1, 2, 3, 2, 3]));
