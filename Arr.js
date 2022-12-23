let arr=[1,2,3,4,5];
console.log(arr);
let arr1=['apple','banana','mango'];
console.log(arr1)
let cars=new Array('800','swift','vista');
console.log(cars);
console.log(cars[2]);
cars[2]='Honda'
console.log(cars[2]);
arr1.push('cherry');
console.log(arr1);
console.log(arr1.length);
let x;
for(x in arr1){
   console.log(arr1[x]); }
for(x of arr1){
    console.log(x);
}