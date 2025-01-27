function solution(nums) {
  const setArray = [...new Set(nums)];

  return setArray.length >= nums.length / 2 ? nums.length / 2 : setArray.length;
}
