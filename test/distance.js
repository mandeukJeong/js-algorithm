function solution(places) {
  const answer = [];

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
    [2, 0],
    [0, 2],
    [-2, 0],
    [0, -2],
  ];

  function check(place) {
    const n = place.length;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (place[i][j] === 'P') {
          for (let [dx, dy] of directions) {
            const x = i + dx;
            const y = j + dy;

            if (x >= 0 && x < n && y >= 0 && y < n) {
              const distance = Math.abs(dx) + Math.abs(dy);

              if (place[x][y] === 'P') {
                if (distance === 1) {
                  return 0;
                } else if (distance === 2) {
                  if (dx === 2 && place[i + 1][j] !== 'X') return 0;
                  if (dy === 2 && place[i][j + 1] !== 'X') return 0;
                  if (dx === -2 && place[i - 1][j] !== 'X') return 0;
                  if (dy === -2 && place[i][j - 1] !== 'X') return 0;
                  if (Math.abs(dx) === 1 && Math.abs(dy) === 1) {
                    if (place[i + dx][j] !== 'X' || place[i][j + dy] !== 'X')
                      return 0;
                  }
                }
              }
            }
          }
        }
      }
    }

    return 1;
  }

  for (place of places) {
    answer.push(check(place));
  }

  return answer;
}
