function solution(gems) {
  let answer = [0, gems.length];
  const gemKinds = new Set(gems).size;

  let start = 0,
    end = 0;
  const gemsCount = new Map();
  gemsCount.set(gems[0], 1);

  while (start < gems.length && end < gems.length) {
    if (gemsCount.size === gemKinds) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start + 1, end + 1];
      }

      gemsCount.set(gems[start], gemsCount.get(gems[start]) - 1);

      if (gemsCount.get(gems[start]) === 0) {
        gemsCount.delete(gems[start]);
      }
      start += 1;
    } else {
      end += 1;
      if (end >= gems.length) break;
      gemsCount.set(gems[end], (gemsCount.get(gems[end]) || 0) + 1);
    }
  }

  return answer;
}
