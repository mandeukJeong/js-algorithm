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
  const queue1 = new Queue();
  const queue2 = new Queue();

  for (const card of cards1) {
    queue1.push(card);
  }

  for (const card of cards2) {
    queue2.push(card);
  }

  for (const item of goal) {
    if (queue1.items[queue1.front] === item) {
      queue1.pop();
    } else if (queue2.items[queue2.front] === item) {
      queue2.pop();
    } else {
      return 'No';
    }
  }

  return 'Yes';
}
