function solution(N, stations, W) {
  let answer = 0;
  let location = 1;
  let idx = 0;

  while (location <= N) {
    if (idx < stations.length && location >= stations[idx] - W) {
      location = stations[idx] + W + 1;
      idx += 1;
    } else {
      location += 2 * W + 1;
      answer += 1;
    }
  }

  return answer;
}
