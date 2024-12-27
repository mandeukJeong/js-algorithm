function solution(alp, cop, problems) {
  let maxAlp = 0;
  let maxCop = 0;
  for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
    maxAlp = Math.max(maxAlp, alp_req);
    maxCop = Math.max(maxCop, cop_req);
  }

  alp = Math.min(alp, maxAlp);
  cop = Math.min(cop, maxCop);

  const dp = Array.from({ length: maxAlp + 1 }, () =>
    Array(maxCop + 1).fill(Infinity)
  );
  dp[alp][cop] = 0;

  for (let i = alp; i <= maxAlp; i++) {
    for (let j = cop; j <= maxCop; j++) {
      if (i + 1 <= maxAlp) dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j] + 1);
      if (j + 1 <= maxCop) dp[i][j + 1] = Math.min(dp[i][j + 1], dp[i][j] + 1);

      for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
        if (i >= alp_req && j >= cop_req) {
          const nextAlp = Math.min(maxAlp, i + alp_rwd);
          const nextCop = Math.min(maxCop, j + cop_rwd);
          dp[nextAlp][nextCop] = Math.min(
            dp[nextAlp][nextCop],
            dp[i][j] + cost
          );
        }
      }
    }
  }

  return dp[maxAlp][maxCop];
}
