let fruits=['banana','mango','graps'];
console.log(fruits);
//remove last one
fruits.pop();
console.log(fruits);
//remove 1st one
fruits.shift();
console.log(fruits);
//add value
fruits.push('cherry');
console.log(fruits);
//add any value 1st index
fruits.unshift('lemon');
console.log(fruits);
// delete
delete fruits[2];
console.log(fruits);
//add particular index no
fruits[2]='mengo';
console.log(fruits);
// remove index number 1 to 3
fruits.splice(1,3);
console.log(fruits);
//add and remove
fruits.splice(3,0,'banana','mengo','graps');
console.log(fruits);

let citrusFruits =fruits.slice(0,2);
console.log(fruits);
console.log(citrusFruits);

//use concat function
let evenNO=[2,4,6];
let addNo=[1,3,5];
let primeNo=[2,3,5];
//let Number=evenNO.concat(addNo);
let Number=evenNO.concat(addNo,primeNo);
console.log(Number);

