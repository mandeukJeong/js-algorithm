function solution(n, k) {
  const kBase = n.toString(k);

  const candidates = kBase
    .split('0')
    .filter((x) => x !== '')
    .map(Number);

  function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }

    return true;
  }

  const answer = candidates.filter(isPrime).length;

  return answer;
}
