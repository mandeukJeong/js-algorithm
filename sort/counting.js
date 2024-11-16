function solution(s) {
  const counts = Array(26).fill(0);

  for (const c of s) {
    counts[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }

  let sortedStr = '';
  for (let i = 0; i < 26; i++) {
    sortedStr += String.fromCharCode(i + 'a'.charCodeAt(0)).repeat(counts[i]);
  }

  return sortedStr;
}

console.log(solution('hello'));
console.log(solution('algorithm'));
