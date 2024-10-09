class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }
}

function solution(cards1, cards2, goal) {
  var answer = 'Yes';
  let tmp = 0;
  const queue1 = new Queue();
  const queue2 = new Queue();

  for (let i = 0; i < cards1.length; i++) {
    queue1.push(cards1[i]);
  }

  for (let i = 0; i < cards2.length; i++) {
    queue2.push(cards2[i]);
  }

  while (tmp < goal.length) {
    if (goal[tmp] === queue1.items[queue1.front]) {
      queue1.pop();
      tmp++;
    } else if (goal[tmp] === queue2.items[queue2.front]) {
      queue2.pop();
      tmp++;
    } else {
      return 'No';
    }
  }

  return answer;
}

console.log(
  solution(
    ['i', 'drink', 'water'],
    ['want', 'to'],
    ['i', 'want', 'to', 'drink', 'water']
  )
);
