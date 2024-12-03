// let arr = ['john','william','alex','Allen','fayaz','Zakir','8',"roop",'0'];
//  let arr = [12,10,5,99,0,6,4,87];
//  console.log(arr.sort((a,b)=> a-b)); // for sorting numeric values in ascending order
//  console.log(arr.sort((a, b) => b-a)); // for sorting numeric values in descending order
//  -Infinity Infinity
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));
// console.log(Math.max.apply(null,arr));
// console.log(Math.min.apply(null, arr));

// console.log(arr.sort()); // sorts the array in lexicographical order
// console.log(arr.reverse());
// console.log(arr.sort().reverse());
// console.log(arr.toSorted());
// console.log(arr.toSorted().toReversed());
// console.log(arr);
// console.log(arr.toString());
// console.log(arr.join(' '));
// console.log(arr.at(13));
// console.log(arr.push('Devesh',"Ramendra"));
// console.log(arr.pop());
// console.log(arr.unshift('Ujjwal'));
// console.log(arr.shift());

// console.log(arr.slice(2));
// arr_name.splice(start_index,no.OfElementstoremove,valuestoaddinplaceofremovedvalues)
// console.log(arr.splice(2,2,'falak','ryan','Ramesh'));
// console.log(arr.includes(6));
// console.log(arr.indexOf('fay'));
// console.log(arr.length);
// console.log(arr);

// spread operator ---->
// const arr2 = [1,2,3,4,5];
// const arr3 = [6,7,8,9,10,...arr2,11,12,13];
// const arr4 = [...arr2,"Raman",...arr3,"Raghav"];
// console.log(arr3);
// console.log(arr4);

// rest operator ----->>>>>
// function printNum(a,b,...n){
//     console.log(`${a} ${b}`);
//     console.log(n);
// };

// printNum(1,2,3,4,5,6,7,19,6,0);

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
// to identify an array ,  Array.isArray() is used---->
// console.log(Array.isArray(item_));

// to convert any iterable thing in JS in array , Array.from() is used ----->
// let str = 'apple';
// let myArray =  Array.from(str);
// console.log(myArray);


//    Loops for Array
let str = ["Ravi", "Rahul", "Rakesh", "Faizal", 8, true];

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

switch ('z') {
  case 'a':
    //block of statement if case is matched
    console.log("Hey I am Here");
    break;
  case 'b':
    //block of statement if case is matched
    console.log("Hey I am Here also");
    break;
  case 'c':
    //block of statement if case is matched
    console.log("Hey I am Here too");
    break;
  case 'd':
    //block of statement if case is matched
    console.log("Oh God !");
    break;
  default:
  //block of statement if all cases are failed
  console.log("It is too confusing but yeah we reached to the end")
}

