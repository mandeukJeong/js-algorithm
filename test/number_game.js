function solution(A, B) {
  let answer = 0;
  let bIdx = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => b - a);

  for (let aIdx = 0; aIdx < A.length; aIdx++) {
    if (B[bIdx] > A[aIdx]) {
      answer += 1;
      bIdx += 1;
    }
  }

  return answer;
}
