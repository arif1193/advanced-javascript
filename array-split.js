// slice......
// const nums = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
// const part = nums.slice(3, 7);
// console.log(part);

// splice...
// const nums = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
// const removed = nums.splice(3, 3, 45);
// console.log(removed);
// console.log(nums);

// join...
const nums = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
const removed = nums.splice(3, 7, 45);
const together = nums.join('ami');
console.log(together);