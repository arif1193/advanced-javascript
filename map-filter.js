const numbers = [3, 5, 8, 2, 9, 12];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push (result);
    
// }

// function square (){
//     return element * element;
// }

// const square = element => element * element;
// const square = x => x * y;
    
// // numbers.map(function(element, index, array){
// //     console.log(element, index,array);
// })

// const result = numbers.map(function(element){
//     return element * element;
// })

// const result = numbers.map(x => x * x );

// console.log(result);

// filter
const bigger = numbers.filter(x =>x <5);

const isThere = numbers.find(x => x > 5);
console.log(isThere);