function solution(s) {
  const answer = [];
  for (const str of s) {
    const stack = [];
    let count = 0;
    for (const char of str) {
      stack.push(char);
      if (
        stack.length >= 3 &&
        stack[stack.length - 3] === '1' &&
        stack[stack.length - 2] === '1' &&
        stack[stack.length - 1] === '0'
      ) {
        count += 1;
        stack.splice(-3);
      }
    }

    let idx = stack.lastIndexOf('0');

    if (idx === -1) {
      answer.push('110'.repeat(count) + stack.join(''));
    } else {
      stack.splice(idx + 1, 0, '110'.repeat(count));
      answer.push(stack.join(''));
    }
  }

  return answer;
}
