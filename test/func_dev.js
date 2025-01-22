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

  isEmpty() {
    return this.rear === this.front;
  }
}

function solution(progresses, speeds) {
  let count = 0;
  const result = [];
  const queue = new Queue();

  for (const progress of progresses) {
    queue.push(progress);
  }

  while (!queue.isEmpty()) {
    while (queue.items[queue.front] >= 100) {
      count++;
      queue.pop();
    }

    if (count !== 0) {
      result.push(count);
      count = 0;
    }

    queue.items = queue.items.map((item, i) => item + speeds[i]);
  }

  return result;
}
