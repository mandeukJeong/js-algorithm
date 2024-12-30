function solution(board, skill) {
  const N = board.length;
  const M = board[0].length;

  let answer = 0;
  let dp = [...Array.from(Array(N), () => [...Array.from(Array(M), () => 0)])];
  for ([type, r1, c1, r2, c2, degree] of skill) {
    const d = type === 1 ? -degree : degree;
    dp[r1][c1] += d;
    if (c2 + 1 < M) dp[r1][c2 + 1] -= d;
    if (r2 + 1 < N) dp[r2 + 1][c1] -= d;
    if (r2 + 1 < N && c2 + 1 < M) dp[r2 + 1][c2 + 1] += d;
  }

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      const top = i > 0 ? dp[i - 1][j] : 0;
      const left = j > 0 ? dp[i][j - 1] : 0;
      const intersection = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0;

      dp[i][j] = top + left - intersection + dp[i][j];

      answer += dp[i][j] + board[i][j] > 0;
    }
  }

  return answer;
}
