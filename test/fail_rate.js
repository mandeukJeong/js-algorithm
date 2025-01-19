function solution(N, stages) {
  const failRate = [];
  const result = [];

  for (let i = 1; i < N + 1; i++) {
    const reached = stages.filter((stage) => stage >= i).length;
    const clearedFail = stages.filter((stage) => stage === i).length;
    failRate.push([i, clearedFail / reached]);
  }

  failRate.sort((a, b) => b[1] - a[1] || a[0] - b[0]);

  for (let i = 0; i < failRate.length; i++) {
    result.push(failRate[i][0]);
  }

  return result;
}
