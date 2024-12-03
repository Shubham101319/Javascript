let age = 19;

// if else if statements --->

// function checkEligibility(age) {
// //   if (age < 18) console.log(`You aren't eligible for driving license`);
// //   else console.log(`You are eligible for driving license`);
// let str = '';
// if(age<18 && age>12) str += `You must be of 18 for applying driving license`;
// else if(age>=0 && age<13)  str += `You are too young to drive a vehicle`;
// else if(age<0) str += `This isn't a valid Age`;
// else if(age>=18 && age<46) str += `You are young enough to drive a vehicle`;
// else if(age>=46 && age<61) str += `You can still drive a vehicle with extra precaution`;
// else if(age >=61 && age <=110) str += `You are too old to drive a veicle`;
// else str += `Are You Mad! This is not a valid age`;
//     return str;
// }


// let result =  checkEligibility(1111113632464);
// console.log(result);

// nested if else statements ---->

function checkEligibility(age){
    if(age>=18){
        if(age<46) console.log(`You are eligible for driving`);
        else {
            if(age<61) console.log(`You driving licence is barely possible`);
            else console.log(`You are not eligible for driving`);
        }
    }
    else {
        if(age>0) console.log(`You are too young to drive a vehicle`);
        else console.log(`This is not a valid age`);
    }
}
checkEligibility(49);