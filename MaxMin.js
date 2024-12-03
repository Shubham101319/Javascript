// Find max and min 
// let arr =prompt(`Enter the value`) 
// let arr =[0,1,2,3,4,5];
// let min =0;
// let max =5;
// for (let i=0; i<arr;i++){
//     if(min>arr[i]){
//         min=arr[i];
//     }
//     if(max<arr[i]){
//         max=arr[i];
//     }
//     let arr
// }

let arr = [];
 let size =prompt(`Enter the size of array`);
 for(let i=0; i<size; i++){
    arr[i]=Number(prompt("Enter the value what you want"));
 };
//  [10,12,0,14,55,99,88,74]
 let max =-Infinity, min=Infinity;
 for(let i=0;i<size;i++){
    if(arr[i]>max)max = arr[i];
    if(arr[i]<min)min = arr[i];

     }

     alert(`min = ${min},max = ${max}`);
     

