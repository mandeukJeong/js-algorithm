function solution(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push('(');
    } else {
      if (stack.length > 0) {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
}

console.log(solution('(())()'));
console.log(solution('((())()'));
