function solution(dirs) {
  const move = { U: [0, 1], R: [1, 0], D: [0, -1], L: [-1, 0] };
  let nowLocation = [0, 0];
  const visited = [];

  for (let i = 0; i < dirs.length; i++) {
    const dx = nowLocation[0] + move[dirs[i]][0];
    const dy = nowLocation[1] + move[dirs[i]][1];

    // 좌표평면 벗어나는지 확인
    if (dx > 5 || dx < -5 || dy > 5 || dy < -5) {
      continue;
    }

    visited.push(`[${nowLocation}, ${[dx, dy]}]`);
    visited.push(`[${[dx, dy]}, ${nowLocation}]`);
    nowLocation = [dx, dy];
  }

  return [...new Set(visited)].length / 2;
}
