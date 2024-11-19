function solution(n) {
  const digits = Array.from(String(n), Number);
  digits.sort((a, b) => b - a);
  const answer = Number(digits.join(''));
  return answer;
}
