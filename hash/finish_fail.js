function solution(participant, completion) {
  const hash = {};

  for (let i = 0; i < completion.length; i++) {
    if (hash[completion[i]]) {
      hash[completion[i]] += 1;
    } else {
      hash[completion[i]] = 1;
    }
  }

  for (let i = 0; i < participant.length; i++) {
    if (hash.hasOwnProperty(participant[i])) {
      hash[participant[i]] -= 1;
    } else {
      return participant[i];
    }
  }

  for (let name in hash) {
    if (hash[name] !== 0) {
      return name;
    }
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
);
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
