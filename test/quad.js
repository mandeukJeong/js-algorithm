function solution(arr) {
  const answer = [0, 0];

  const n = arr.length;

  const dfs = (r, c, size) => {
    const first = arr[r][c];
    let isUniform = true;
    for (let i = r; i < r + size; i++) {
      for (let j = c; j < c + size; j++) {
        if (arr[i][j] !== first) {
          isUniform = false;
          break;
        }
      }
      if (!isUniform) break;
    }

    if (isUniform) {
      answer[first] += 1;
      return;
    }

    const half = size / 2;
    dfs(r, c, half);
    dfs(r, c + half, half);
    dfs(r + half, c, half);
    dfs(r + half, c + half, half);
  };

  dfs(0, 0, n);

  return answer;
}
