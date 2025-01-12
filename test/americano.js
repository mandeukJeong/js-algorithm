function solution(money) {
  var answer = [];
  const max = Math.trunc(money / 5500);
  const remain = max > 0 ? money - max * 5500 : money;

  answer.push(max);
  answer.push(remain);

  return answer;
}
