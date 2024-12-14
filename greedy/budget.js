function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;

  for (const amount of d) {
    if (budget < amount) {
      break;
    }

    budget -= amount;
    count++;
  }

  return budget >= 0 ? count : count - 1;
}
