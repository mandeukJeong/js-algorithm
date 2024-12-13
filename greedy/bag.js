function calculateUnitValue(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].push(items[i][1] / items[i][0]);
  }
  return items;
}

function sortByUnitValue(items) {
  items.sort((a, b) => b[2] - a[2]);
  return items;
}

function knapsack(items, weightLimit) {
  let totalValue = 0;
  let remainingWeight = weightLimit;

  for (let i = 0; i < items.length; i++) {
    if (items[i][0] <= remainingWeight) {
      totalValue += items[i][1];
      remainingWeight -= items[i][0];
    } else {
      const fraction = remainingWeight / items[i][0];
      totalValue += items[i][1] * fraction;
      break;
    }
  }
  return totalValue;
}

function solution(items, weightLimit) {
  items = calculateUnitValue(items);
  items = sortByUnitValue(items);

  return knapsack(items, weightLimit);
}

console.log(
  solution(
    [
      [10, 19],
      [7, 10],
      [6, 10],
    ],
    15
  )
);
console.log(
  solution(
    [
      [10, 60],
      [20, 100],
      [30, 120],
    ],
    50
  )
);
