function solution(arr, target) {
  let answer = false;
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    hash[target - arr[i]] = arr[i];
  }

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] && hash[arr[i]] !== arr[i]) {
      return true;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 8], 6));
console.log(solution([2, 3, 5, 9], 10));
