
let randomNO = Math.ceil(Math.randomNO()*100);
let tries = 0;
let isloop = true;

while(isloop){
    guessNO = prompt("Enter the number want you want")
    if(isNaN(guessNO)){
        alert("Enter the valid number")
    }
    else if (guessNO>100 || guessNO<1){
        alert("Enter the number b\w 1-100");

    }
    else if(guessNO<randomNO){
        tries++;
        alert("The number guessed is less than the targeted number")
    }
    else if(guessNO>randomNO){
        tries++;
        alert("The number guessd is grater than the targeted number")

    }
    else{
        tries++;
        alert("Congrats! You gussed the right number and it took")
        isloop = false;
    }
}