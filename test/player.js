function solution(participant, completion) {
  const hash = {};

  for (const name of completion) {
    if (hash[name]) {
      hash[name]++;
    } else {
      hash[name] = 1;
    }
  }

  for (const name of participant) {
    if (!hash[name]) {
      return name;
    } else {
      hash[name]--;
    }

    if (hash[name] < 0) {
      return name;
    }
  }
}
