function solution(s) {
  const stack = [];
  const twin = { ['[']: ']', ['(']: ')', ['{']: '}' };
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let flag = true;
    const cuttedStr = s.slice(i, s.length).concat(s.slice(0, i));

    for (const str of cuttedStr) {
      if (['(', '{', '['].includes(str)) {
        stack.push(str);
      } else {
        if (stack.length === 0) {
          flag = false;
          break;
        } else {
          if (str === twin[stack[stack.length - 1]]) {
            stack.pop();
          }
        }
      }
    }

    if (flag && stack.length === 0) {
      count++;
    }
  }

  return count;
}
