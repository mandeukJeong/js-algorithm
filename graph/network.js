function dfs(computers, visited, node) {
  visited[node] = true;
  for (let idx = 0; idx < computers[node].length; idx++) {
    if (computers[node][idx] && !visited[idx]) {
      dfs(computers, visited, idx);
    }
  }
}

function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(computers, visited, i);
      answer++;
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
