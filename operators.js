/**********Arithmetic Operators  ************/
let a= 2;
let b= 2;
let result =a+b;
let result2 =a**b;
let result3 =a-b;

console.log('result is : '+result);
let result1 =a/b;


//console.log('reslt is :'+result1);
//console.log('reslt is2 :'+result2);
//console.log('reslt is :'+result3);


/*******Assignment Operator*******/ 
a+=b;
console.log('result is A : '+a)

/*******comparison Operator*******/ 
// == equal to
// === equal value and equal type
// != not equal to
// !== not equal value and type
let x =5;
let y = 5;
//let z= x==y;
let z= x!=y;
console.log('Z value: '+z)

/*******Logical Operator*******/

// && and,! not,||oR
let i = true;
let j = false;

console.log((10>5)&&(3>6));
console.log((10>5)||(3>6));
console.log(!5);


/******* Type Operator*******/

//typeof
//instanceof

let firstName ='krishna';
console.log(typeof firstName);
console.log(typeof 123.3);
console.log(typeof false);

let lastName=new String('Patel');
let id =new Number('123');
console.log(lastName instanceof String);
console.log(id instanceof Number); 

/*******Bitwise Operator*******/ 
//& AND
// | OR
// ^ XOR
// ~ NOT
// << Left Shipt
// >> right shift

let = A=1;
let = B=2;
//And
console.log(A&B);
//OR
console.log(A|B);
// ^ XOR

console.log(A^B);
//~NOT
console.log(~5);

