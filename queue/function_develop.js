class Queue {
  items = [];
  front = 0;
  rear = 0;

  size() {
    return this.rear - this.front;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  increase(index, speed) {
    this.items[index] += speed;
  }
}

function solution(progresses, speeds) {
  let count = 0;
  var answer = [];
  const queue = new Queue();

  for (let i = 0; i < progresses.length; i++) {
    queue.push(progresses[i]);
  }

  while (queue.size() > 0) {
    if (queue.items[queue.front] < 100) {
      if (count !== 0) {
        answer.push(count);
        count = 0;
      }

      for (let i = 0; i < speeds.length; i++) {
        queue.increase(i, speeds[i]);
      }
    } else {
      queue.pop();
      count++;
    }
  }

  answer.push(count);

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
