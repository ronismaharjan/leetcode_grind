let nums = [2, 7, 11, 15];
let target = 9;
let index = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; i < nums.length; i++) {
    if (nums[i] + nums[j] == target) {
      index.push(i, j);
    }
  }
}
