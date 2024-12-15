function solution(people, limit) {
  people.sort((a, b) => a - b);
  let count = 0;
  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    if (people[j] + people[i] <= limit) {
      i += 1;
    }

    j -= 1;
    count += 1;
  }

  return count;
}
