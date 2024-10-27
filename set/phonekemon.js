function solution(nums) {
  const numSet = new Set(nums);
  const n = nums.length;
  const k = n / 2;
  return Math.min(k, numSet.size);
}

console.log(solution([3, 1, 2, 3]));
