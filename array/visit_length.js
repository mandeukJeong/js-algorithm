function solution(dir) {
  let result = [];
  const initial = [0, 0];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const pos = { U: 0, R: 1, D: 2, L: 3 };

  for (i = 0; i < dir.length; i++) {
    const x = initial[0] + dx[pos[dir[i]]];
    const y = initial[1] + dy[pos[dir[i]]];

    if (x <= 5 && x >= -5 && y <= 5 && y >= -5) {
      result.push(`${[...initial]}, ${[x, y]}`);
    } else {
      continue;
    }

    initial[0] = x;
    initial[1] = y;
  }

  result.sort((a, b) => a[0] - b[0]);
  result = [...new Set(result)].length;
  return result;
}

console.log(solution('ULURRDLLU'));
console.log(solution('LULLLLLLU'));
