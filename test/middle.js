function solution(array) {
  var answer = 0;
  var sortedArray = array.sort((a, b) => a - b);
  var center = Math.trunc(array.length / 2);

  answer = sortedArray[center];

  return answer;
}
