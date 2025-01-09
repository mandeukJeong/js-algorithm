function solution(n) {
  var answer = [];
  var temp = 1;

  while (true) {
    if (temp <= n) {
      answer.push(temp);
      temp += 2;
    } else {
      break;
    }
  }

  return answer;
}
