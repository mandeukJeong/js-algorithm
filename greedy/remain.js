function solution(amount) {
  const denominations = [1, 10, 50, 100];
  denominations.sort((a, b) => b - a);

  const change = [];

  for (const coin of denominations) {
    while (amount >= coin) {
      change.push(coin);
      amount -= coin;
    }
  }

  return change;
}

console.log(solution(123));
console.log(solution(350));
