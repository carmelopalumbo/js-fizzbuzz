// js

//const
const fizzOutput = "Fizz";
const buzzOutput = "Buzz";
const fizzbuzzOutput = "FizzBuzz";
const limit = 100;
const container = document.querySelector('.col');

// verifica multiplo
for(let i = 1; i <= limit; i++){
    if(!(i % 3) && !(i % 5)){

        //console.log(fizzbuzzOutput);

        //creo il box
        const box = document.createElement('div');

        //aggiungo la classe
        box.className = 'numberbox';
        box.classList.add('green');

        //output e aggiungo al container
        box.innerHTML = fizzbuzzOutput;
        container.append(box);

    }else if(!(i % 5)){

        //console.log(buzzOutput);
        const box = document.createElement('div');

        //aggiungo la classe
        box.className = 'numberbox';
        box.classList.add('yellow');

        //output e aggiungo al container
        box.innerHTML = buzzOutput;
        container.append(box);

    }else if(!(i % 3)){

        //console.log(fizzOutput);
         const box = document.createElement('div');

        //aggiungo la classe
        box.className = 'numberbox';
        box.classList.add('red');

        //output e aggiungo al container
        box.innerHTML = fizzOutput;
        container.append(box);

    }else{
        
        //console.log(i);

        const box = document.createElement('div');

        //aggiungo la classe
        box.className = 'numberbox';
        box.classList.add('blue');

        //output e aggiungo al container
        box.innerHTML = i;
        container.append(box);
    }
}