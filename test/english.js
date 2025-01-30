function solution(n, words) {
  const hash = {};

  for (let i = 0; i < words.length; i++) {
    const nowPerson = (i % n) + 1;
    const nowIndex = Math.trunc(i / n) + 1;
    const lastChar = i > 0 ? words[i - 1][words[i - 1].length - 1] : null;

    if (hash[words[i]]) {
      return [nowPerson, nowIndex];
    } else {
      if (lastChar && lastChar !== words[i][0]) {
        return [nowPerson, nowIndex];
      }

      hash[words[i]] = 1;
    }
  }

  return [0, 0];
}
