// Swapping using 3rd value //
// let a=8;
// let b=12;
// let temp= a;
// a = b;
// b =temp;

// console.log(`a= ${a}b= ${b}`);

// Some important rule 

// let arr = ['Rohan','Mohan','Rakesh','Dinesh','Mahesh','Suresh']
// console.log(arr.toString());
// console.log(arr.join('_'));
// console.log(arr.at(4));
// console.log(arr.shift());
// console.log(arr.slice());
// console.log(arr.slice(2));
// console.log(arr.unshift('Rakesh'));
// console.log(arr.pop());
// console.log(arr.push("Ram"));

// spread operator----------->
// const arr2 =[1,2,3,4,5];
// const arr3 =[...arr2,6,7,8,9,10];
// const arr3 =[6,7,8,9,10,...arr2];
// console.log(arr3)

// const arr2 =[1,2,3,4,5];
// const arr3 =[6,7,8.,9,10,...arr2,11,12,13];
// const arr4 =[...arr2,...arr3];
// // console.log(arr3);
// console.log(arr4);

// const arr2 =[1,2,3,4,5];
// const arr3 =[6,7,8.,9,10,...arr2,11,12,13];
// const arr4 =[...arr2,"Raman",...arr3,"Raghav"];
// // console.log(arr3);
// console.log(arr4);

// Printnumber ------>
//  function PrintNum(a,b,c,...n){  //For print all value remain a,b,c.
//     console.log(n);

//  }
//  PrintNum(1,2,3,4,5,6,7,8,9,10,11);

//  function PrintNum(...n){  //For print to all number 
//     console.log(n);

//  }
//  PrintNum(1,2,3,4,5,6,7,8,9,10,11);

//  function PrintNum(a,b,c,...n){
    // console.log(`${a} ${b} ${c}`);   //only for print 1,2,3.

//  }
//  PrintNum(1,2,3,4,5,6,7,8,9,10,11);

// ArrayMethod--->

// let arr =[12,11,13,14,15,16,45,87,99,100];
// console.log(arr.sort((a,b)=> a-b));   //for ascending order 
// console.log(arr.sort((a,b)=> b-a));   //for descending order

// console.log(Math.max(...arr));   //Print for big number
// console.log(Math.min(...arr));   //Print for small number

// console.log(arr.sort());
// console.log(arr.reverse());
// console.log(arr.sort().reverse());
// console.log(arr.toSorted());
// console.log(arr.toSorted().toReversed());


// let arr = [10, 20, 30, 40, 50];

//  let mappedArray = arr.map((num)=>num/2);
//  let mappedArray = arr.map(function(value){
//     return value*2;
//  });
// console.log(mappedArray);

// let filteredArray = arr.filter(value=>(value%4 == 0));
// let filteredArray = arr.filter((value) => value >30);
// console.log(filteredArray);

// let reducedArray = arr.reduce((accumulator,nextValue) => accumulator*nextValue);
// console.log(reducedArray);
//  console.log(arr);


// let item = {
//     name:"Ravi"
// };

// let item_ = ['Ravi'];
// // to identify an array ,  Array.isArray() is used---->
// console.log(Array.isArray(item_));

// to convert any iterable thing in JS in array , Array.from() is used ----->
// let str = 'apple';
// let myArray =  Array.from(str);
// console.log(myArray);


//    Loops for Array
// let str = ["Ravi", "Rahul", "Rakesh", "Faizal", 8, true];

// for(let value of str){
//     console.log(value);
// }

// str.forEach((value)=>{
//     console.log(`value = ${value}`)
// })


//      Switch Statements
// switch (value) {
//   case 1:
//     //block of statement if case is matched
//     break;
//   case 2:
//     //block of statement if case is matched
//     break;
//   case 3:
//     //block of statement if case is matched
//     break;
//   case n:
//     //block of statement if case is matched
//     break;
//   default:
//   //block of statement if all cases are failed
// }

//  Example of switch statement ----------->>>>>>>.

// switch ('') {
//   case 'a':
//     //block of statement if case is matched
//     console.log("Hey I am Here");
//     break;
//   case 'b':
//     //block of statement if case is matched
//     console.log("Hey I am Here also");
//     break;
//   case 'c':
//     //block of statement if case is matched
//     console.log("Hey I am Here too");
//     break;
//   case 'd':
//     //block of statement if case is matched
//     console.log("Oh God !");
//     break;
//   default:
// //   block of statement if all cases are failed
//   console.log("It is too confusing but yeah we reached to the end")
// }



