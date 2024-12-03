function checkleapyear(year){
    if((year%4 == 0) &&(year%100 !=0) ||(year%400 ==0)){
        return true;
    }
    else{
        return false;
    }
}
const year = 1135;
const yearcheckleapyear = checkleapyear(year);
console.log(yearcheckleapyear);