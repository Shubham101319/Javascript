// var a =10;

// {
//     var a=20;
//     console.log(a);
// }
// console.log(a);

// 
// let a =15;
// {
//     let a=20;
//     console.log(a);
// }
// console.log(a);

// let obj = {Name:"Shubham",Rollno:15,ispassed:true,Address:{
//     "House No":"105n",
//     "Locality":"Banthra",
//     City:"LUCKNOW"
// }};
// console.log(obj.Address["Locality"]
// )

// let a=9-8+"0"*(5*"10");
// console.log()
// let a=4+"2"+7;
// console.log(typeof a)

// let a=10+("5"-2)*"3";
// console.log(typeof a)

// console.log(!!"");
// console.log(typeof Boolean);

// console.log(Boolean(-0));
// console.log(typeof Boolean);

// console.log("object"?true:false);
// console.log(typeof oprator);

// console.log(""?true:false);
// console.log(typeof oprator)

// let age =50;
// let result =
// (age >=18 && age <51)
// ?"age is valid"
// :"age is not valid"
// console.log(result);const

//  age =Number(prompt("Enter the age::"));
// alert(age +" "+typeof age);

//  const age = Number(prompt("enter the age::"));
//  console.log(age +" "+ typeof age)
//  age =58
// let result =(age>=18 && age <60)
// ?"you can still vote with additonal checks and it can take some time"
// :"you cannot even enter inside the voting promises"
// console.log(result);

// const age =Number(prompt("enter the age::"));
// console.log(age + " " + typeof age);
// const result =
//  age >= 18 && age <= 50
//  ? age >= 18 && age <= 30
//  ?"you are strongly eligible for vote"
//  : "you are eligible for vote"
// : age > 50 && age <= 60
// ? "you can still eligible for some addition checks"
// : "you cannot enter in the voting booth promises";
// alert(result);



// Turn on function
// function bulbon(){
//     let bulbobj = document.querySelector(".bulbof");
//     bulbobj.setAttribute("src", "images.jpg");
// }
// function bulbof(){
//     let bulbobj = document.querySelector(".bulbof");
//     bulbobj.setAttribute("src", "images (2).jpg");
// }



// let firstBasket = 12;
// let secondBasket = 0;
// let totalBasket = firstBasket + secondBasket;
// document.getElementById("totalBasket").textContent = totalBasket;

// document.getElementById("firstBasket").textContent = firstBasket;

// document.getElementById("secondBasket").textContent = secondBasket;

// function leftClick() {
//   if (firstBasket < 12) {
//     firstBasket++;
//     secondBasket--;
//     console.log(`firstBasket ${firstBasket} , secondBasket ${secondBasket}`);

//     document.getElementById("firstBasket").textContent = firstBasket;
//     document.getElementById("secondBasket").textContent = secondBasket;
//   }
// }

// function rightClick() {
//   if (secondBasket < 12) {
//     secondBasket++;
//     firstBasket--;
//     console.log(`firstBasket ${firstBasket} , secondBasket ${secondBasket}`);

//     document.getElementById("secondBasket").textContent = secondBasket;
//     document.getElementById("firstBasket").textContent = firstBasket;
//   }
// function printNUm(a,b,...num){
//     console.log(a+b)
// }
// printNUm(5,7)

// function printNUm(a,b,...num){
//     console.log(a*b)
// }
// printNUm(10,12)

// function printNUm(a, b) {
//     console.log(`${a} ${b}`);
// }
// printNUm(5,3)


// function checkeligibility(percent){
//     let str = '';
//     if (percent>100 && percent<=111) str +=`This is not valid percent`;
//     else if (percent>=90 && percent<=100) str +=`Grade A`;
//    else if (percent>=60 && percent<=89) str +=`Grade B`;
//    else if (percent>=50 && percent<=59) str +=`Grade C`;
//     else if (percent>=33 && percent<=49) str +=`Grade D`;
//     else if (percent>=0 && percent<=33) str +=`You are fail`;
//     else str +=`Are you mad this is not valid percent`
//     return str;
// }

// let result = checkeligibility(112);
// console.log(result);

// function checkeligibility(age){
//     if(age>=18){
//         if(age<46) console.log(`You are eligible for drive`);
//         else{
//             if(age<61) console.log(`You are not eligible to apply for driving license`);
//             else console.log(`You are not eligible for driving`);
//         }
//     }
//     if(age>0 && age<17) console.log(`You are too young for driving`);
//     // else console.log(`This is not a valid eligible`)
// }  
// checkeligibility(40);


//  function checkleapyear(year){
//     if((year % 4==0 && year % 100 != 0)||(year % 4==0 && year % 100 == 0 && year % 400 ==0)){
//         console.log(`This is a leap year`)
//     }
//     else{
//      console.log(`this is not a leap year`)
//     }
// }
// checkleapyear(2020);

// function Findleapyear(year){
//     if((year % 4==0 && year % 100 !=0)||(year % 4==0 && year % 100 ==0 && year % 400==0)){
//         console.log(`This is a leap year`)
//     }
//     else{
//         console.log(`This is not a leap year`)
//     }
//     }
//     Findleapyear(2000)

// function Findleapyear(year){

//          if(year % 4 == 0 && year % 100 !=0) console.log(`${year} This is a leap year`);
//   else if(year % 4 ==0 && year %  100 == 0 && year % 400 == 0) console.log(`${year} This is a leap year`);
//   else console.log(`${year}  This is not a leap year`);
    
// }
//  Findleapyear(2044);

// let str = "      anonymous                 ";
// let str2 = '1212-1414-1010-1111';

// console.log(str);
// console.log(str.at(1));
// console.log(str.charCodeAt(-4));
// console.log(str.charCodeAt(4));
// console.log(str.lastIndexOf('o'));
// console.log(str.slice(3,6));
// console.log(str.slice(-6,-3));
// console.log(str.slice(3));
// console.log(str.substring(2,6));
// console.log(str.substring(-2,-6));
// console.log(str.repeat(2));
// console.log(str.trim()+'1');
// console.log(str.trimStart()+'1');
// console.log(str.trimEnd()+'1');
// console.log(str2.replace('-',''));
// console.log(str2.replaceAll('-',''));
// console.log(str2.replaceAll('-','8'));
// console.log(str2.padStart(51,0));

// write to a progaram to check tha palindrome string--------->
// const myStr = prompt("Enter tha string");
// 'manish'
// let len = myStr.length;
// let newstr = '';
// for(let i = len-1;i>=0;i--){
//     newstr +=myStr.at(i);
// }
// if(newstr==myStr)alert('String is palindrome');
//     else alert('String is not palindrome');

// armstong Number

// let num = Number(prompt("Enter the number"));
// let temp = num;
// let power = 0;

// while(temp>0){
//     temp = Math.floor(temp/10);
//     power++;
// }
//  temp = num;

//  let newNumber =0;
//   while(temp>0){
//     let digit = temp%10;
//     newNumber = newNumber + Math.pow(digit,power);
//     temp = Math.floor(temp/10);

//   }

//   if(newNumber == num){
//     alert(`${num} is armstrong number`)
//   }
//   else{
//     alert(`${num} is not armstrong number`)}
// let row = prompt(`Enter the row you want`);
// // let row = 6;

// for(let i=1; i<= row ; i++){
//     let str ='';
//     for(let j=1; j<=row ; j++){
//         str +='*'
//     }
//     str+=`\n`;
// }
// for(let i=2; i<= row ; i++){
//     let str ='';
//     for(let j=2; j<=row ; j++){
//         str +='*'
//     }
// }
// console.log(str);

// let row = prompt(`Enter the row you want`);
// let str ='';
// for(let i=1;i<=row;i++){
//         // let str ='';
//         for(let j=1;j<=row;j++){
//             str += '*';
//         }
//         str+=`\n`
//     }
//     console.log(str);

// let row = prompt(`Enter the number what you want`);
// let str = '';
// for(let i=1;i<=row;i++){
//     for(let j=1;j<=i;j++){
//         str += '*';
//     }
//     str+=`\n`
// }
// console.log(str);


// let row = prompt(`Enter the number what you want`);
// let str = '';
// for(let i=1;i<=row;i++){
//     for(let j=1;j<=row-1;j++){
    
//         str += ' ';
//     }
//     str +='*';
//     for(let g=row;g>row-1;g++){
//         str += ' ';
//     }
//     str+=`\n`
// }
// console.log(str);


// let row = prompt(`Enter the number what you want`);
// let str = '';
// let i;
// let j;  
// for(let i = 0; i <= 5;i++){
// for(let j=0;j<6-1;j++){
//     for(let j=6-i;j <=5;j++){
//         str += '*';
//     }
//     str+=`\n`
// }
// }
// console.log(str);

// 
// let n=5;
// for(let i=1;i<=n;i++){
//     let str = "*";
//     let space = ' ';
//     console.log(space.repeat((n-i))+str.repeat(i));
// }


// let row =prompt(`Enter the value`)
// let n=5;
// let str = "";
// for(let i= 1;i<=n;i++){
//     for(let j=0;j<n-i;j++){
//         str +=" ";
//     }
//     for(let k =0;k<i;k++){
//         str +="*";
//     }
//     str +="\n"
// }
// console.log(str);

// let row =prompt(`Enter the value what you want`)
// let n =5;
// let str =" ";
// for(let i=0;i<n;i++){
//     for(let j =0;j<n;j++){
//         if(i==0||i==n-1){
//             str+="*";
//         }
//         else{
//             if(j==0||j==n-1){
//                 str +="*";
//             }
//             else{
//                 str +=" ";
//             }
//         }
//     }
//     str +="\n"
// }
// console.log(str);

// let row =prompt(`Enter the value`)
// let n =5;
// let str ="";
// for(let i=0;i<n;i++){
//     for(let j=0;j<i;j++){
//         str += " ";
//     }
//     for(let k=0;k<2*(n-i)-1;k++){
//         str +="*";
//     }
//     str +="\n"
// }
// console.log(str);

// for(i=1;i<=5;i++){
//     for(j=5;j>1;j--){
//         let str = "";
//     }
//     for(k=1;k<=((2*i)-1);k++){
//         str  +="*";
//     }
// }
// console.log(str);

// Hallow square

let row = prompt(`Enter the value want you want`);
let str= '';
for(let i =1; i<=row; i++){
    for(let j=i;j<=row;j++){
        if((i==1)||(i==row)||(j==1)||(j==row))
            str +='*';
        else
        str =' ';
    }
    str='\n';
}
console.log(str);