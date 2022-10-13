// js

//const
const fizzOutput = "Fizz";
const buzzOutput = "Buzz";
const fizzbuzzOutput = 'FizzBuzz';
const limit = 100;


// verifica multiplo
for(let i = 1; i <= limit; i++){
    if(!(i % 3) && !(i % 5)){
        console.log(fizzbuzzOutput);
    }else if(!(i % 5)){
        console.log(buzzOutput);
    }else if(!(i % 3)){
        console.log(fizzOutput);
    }else{
        console.log(i);
    }
}