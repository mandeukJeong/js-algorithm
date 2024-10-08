function solution(s) {
  let count = 0;
  let stack = [];
  const test = {
    ']': '[',
    ')': '(',
    '}': '{',
  };

  for (let i = 0; i < s.length; i++) {
    const str = s.substr(i).concat(s.substr(0, i));
    let flag = false;

    for (let j = 0; j < str.length; j++) {
      if (!test[str[j]]) {
        stack.push(str[j]);
      } else {
        if (stack.length !== 0 && stack[stack.length - 1] === test[str[j]]) {
          stack.pop();
        } else {
          stack = [];
          flag = true;
          break;
        }
      }
    }

    if (flag === true) {
      continue;
    } else {
      if (stack.length === 0) {
        count++;
      } else {
        stack = [];
      }
    }
  }

  return count;
}

console.log(solution('[](){}'));
console.log(solution('}]()[{'));
console.log(solution('[)(]'));
console.log(solution('}}}'));
