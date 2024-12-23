function solution(numbers) {
  const totalSum = 45;
  const sumOfNumbers = numbers.reduce((acc, num) => acc + num, 0);
  const answer = totalSum - sumOfNumbers;

  return answer;
}
