let year = Number(prompt("Enter the year :: "));

const checkYear = (year) => {
  Method --> 1
  if((year % 4==0 && year%100 != 0) ||
  (year%4 ==0 && year%100 == 0 && year%400 == 0))
  console.log(`${year} is a leap year`);
  else{
      console.log(`${year} isn't a leap year`);
  }

  Method --> 2
  if(year % 4 == 0 && year%100 !=0) console.log(`${year} is a leap year`);
  else if(year%4 ==0 && year%100 == 0 && year%400 == 0) console.log(`${year} is a leap year`);
  else console.log(`${year} isn't a leap year`);
  Method --> 3
  let result = "";
  if (isNaN(year)) {
    return "Please Type a valid number";
  } else {
    if (year % 4 == 0) {
      if (year % 100 != 0) result = `${year} is a leap year`;
      else {
        if (year % 400 == 0) result = `${year} is a leap year`;
        else {
          result = `${year} isn't a leap year`;
        }
      }
    } else {
      result = `${year} isn't a leap year`;
    }
    return result;
  }
};

console.log(checkYear(year));
